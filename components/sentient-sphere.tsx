"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { MathUtils, Vector3, CatmullRomCurve3, Color } from "three"
import { Line } from "@react-three/drei"
import type { Mesh, ShaderMaterial } from "three"
import type * as THREE from "three"

export interface CameraWaypoint {
  x: number
  y: number
  z: number
  fov: number
  label: string
}

export type ColorMode = "cycle" | "gradient" | "layers"

export interface SphereSettings {
  colors: {
    research: string
    design: string
    code: string
  }
  colorTransitionSpeed: number
  rotationSpeed: number
  rotationDirection: 1 | -1
  rotationAxis: "x" | "y" | "z" | "xy" | "xz" | "yz" | "xyz"
  colorMode: ColorMode
}

export const defaultSphereSettings: SphereSettings = {
  colors: {
    research: "#fbdca7", // updated to user's color
    design: "#ffbdc8", // updated to user's color
    code: "#b4f3fd", // updated to user's color
  },
  colorTransitionSpeed: 0.3, // updated to 0.3
  rotationSpeed: 0.01,
  rotationDirection: -1,
  rotationAxis: "xy",
  colorMode: "gradient",
}

export const defaultWaypoints: CameraWaypoint[] = [
  { x: 0, y: 0, z: 0.5, fov: 120, label: "Hero" },
  { x: -2, y: 0, z: 0.5, fov: 45, label: "Works" },
  { x: -2, y: 0, z: 0.5, fov: 45, label: "Zoom Out" },
  { x: -3.5, y: 1.2, z: 5.4, fov: 25, label: "Footer" },
]

interface SphereProps {
  scrollProgress: number
  waypoints: CameraWaypoint[]
  showDebug: boolean
  settings: SphereSettings
}

function Sphere({ scrollProgress, waypoints, showDebug, settings }: SphereProps) {
  const meshRef = useRef<Mesh>(null)
  const materialRef = useRef<ShaderMaterial>(null)
  const { pointer, camera } = useThree()

  const targetPosition = useRef(new Vector3())

  const cameraPath = useMemo(() => {
    const vectors = waypoints.map((wp) => new Vector3(wp.x, wp.y, wp.z))
    return new CatmullRomCurve3(vectors, false, "catmullrom", 0.5)
  }, [waypoints])

  const curvePoints = useMemo(() => {
    const points: [number, number, number][] = []
    for (let i = 0; i <= 100; i++) {
      const t = i / 100
      const point = cameraPath.getPoint(t)
      points.push([point.x, point.y, point.z])
    }
    return points
  }, [cameraPath])

  const interpolateFov = (progress: number) => {
    const segmentCount = waypoints.length - 1
    const segment = Math.min(Math.floor(progress * segmentCount), segmentCount - 1)
    const segmentProgress = progress * segmentCount - segment
    const fov1 = waypoints[segment].fov
    const fov2 = waypoints[Math.min(segment + 1, waypoints.length - 1)].fov
    return MathUtils.lerp(fov1, fov2, segmentProgress)
  }

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: [0, 0] },
      uColor1: { value: new Color(settings.colors.research) },
      uColor2: { value: new Color(settings.colors.design) },
      uColor3: { value: new Color(settings.colors.code) },
      uColorSpeed: { value: settings.colorTransitionSpeed },
      uColorMode: { value: 0 }, // 0 = cycle, 1 = gradient, 2 = layers
    }),
    [],
  )

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uColor1.value = new Color(settings.colors.research)
      materialRef.current.uniforms.uColor2.value = new Color(settings.colors.design)
      materialRef.current.uniforms.uColor3.value = new Color(settings.colors.code)
      materialRef.current.uniforms.uColorSpeed.value = settings.colorTransitionSpeed
      materialRef.current.uniforms.uColorMode.value =
        settings.colorMode === "cycle" ? 0 : settings.colorMode === "gradient" ? 1 : 2
    }
  }, [settings.colors, settings.colorTransitionSpeed, settings.colorMode])

  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    
    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normal;
      
      float noise = snoise(position * 1.5 + uTime * 0.15);
      float displacement = noise * 0.15;
      vDisplacement = displacement;
      
      vec3 newPosition = position + normal * displacement;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform float uColorSpeed;
    uniform int uColorMode;
    
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    void main() {
      vec3 color;
      
      if (uColorMode == 0) {
        // CYCLE MODE: Smooth cycling through 3 colors over time
        float t = uTime * uColorSpeed;
        float cycle = mod(t, 3.0);
        
        if (cycle < 1.0) {
          color = mix(uColor1, uColor2, cycle);
        } else if (cycle < 2.0) {
          color = mix(uColor2, uColor3, cycle - 1.0);
        } else {
          color = mix(uColor3, uColor1, cycle - 2.0);
        }
      } else if (uColorMode == 1) {
        // GRADIENT MODE: Surface gradient based on position
        // Use spherical coordinates for smooth gradient
        float theta = atan(vPosition.z, vPosition.x); // -PI to PI
        float normalizedAngle = (theta + 3.14159) / (2.0 * 3.14159); // 0 to 1
        
        // Add time-based rotation to the gradient
        float animatedAngle = mod(normalizedAngle + uTime * uColorSpeed * 0.1, 1.0);
        
        // Three-way gradient
        if (animatedAngle < 0.333) {
          color = mix(uColor1, uColor2, animatedAngle * 3.0);
        } else if (animatedAngle < 0.666) {
          color = mix(uColor2, uColor3, (animatedAngle - 0.333) * 3.0);
        } else {
          color = mix(uColor3, uColor1, (animatedAngle - 0.666) * 3.0);
        }
      } else {
        // LAYERS MODE: Concentric layers based on distance from center
        float dist = length(vPosition);
        float normalizedDist = dist / 1.8; // Sphere radius is 1.8
        
        // Add time-based pulsing to layers
        float animatedDist = mod(normalizedDist + uTime * uColorSpeed * 0.2, 1.0);
        
        // Three concentric layers
        if (animatedDist < 0.333) {
          color = uColor1;
        } else if (animatedDist < 0.666) {
          color = uColor2;
        } else {
          color = uColor3;
        }
        
        // Smooth transitions between layers
        float layerBlend = smoothstep(0.0, 0.05, mod(animatedDist, 0.333));
        float layerBlend2 = 1.0 - smoothstep(0.28, 0.333, mod(animatedDist, 0.333));
        color *= mix(0.8, 1.0, layerBlend * layerBlend2);
      }
      
      // Add displacement-based intensity variation
      float intensity = 0.6 + vDisplacement * 1.5;
      color *= intensity;
      
      // Subtle grid lines
      float line = smoothstep(0.0, 0.02, abs(fract(vUv.x * 20.0) - 0.5));
      line *= smoothstep(0.0, 0.02, abs(fract(vUv.y * 20.0) - 0.5));
      
      gl_FragColor = vec4(color * (1.0 - line * 0.3), 0.7);
    }
  `

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta
      materialRef.current.uniforms.uMouse.value = [pointer.x, pointer.y]
    }

    if (meshRef.current) {
      const rotAmount = delta * settings.rotationSpeed * settings.rotationDirection

      if (settings.rotationAxis.includes("x")) {
        meshRef.current.rotation.x += rotAmount
      }
      if (settings.rotationAxis.includes("y")) {
        meshRef.current.rotation.y += rotAmount
      }
      if (settings.rotationAxis.includes("z")) {
        meshRef.current.rotation.z += rotAmount
      }

      meshRef.current.rotation.x += MathUtils.lerp(0, pointer.y * 0.1, 0.02)
      meshRef.current.rotation.z += MathUtils.lerp(0, pointer.x * 0.1, 0.02)
    }

    const clampedProgress = Math.max(0, Math.min(1, scrollProgress))
    cameraPath.getPoint(clampedProgress, targetPosition.current)

    camera.position.lerp(targetPosition.current, 0.08)
    camera.lookAt(camera.position.x, camera.position.y, camera.position.z - 10)

    const targetFov = interpolateFov(clampedProgress)
    if (camera.type === "PerspectiveCamera") {
      ;(camera as THREE.PerspectiveCamera).fov = MathUtils.lerp(
        (camera as THREE.PerspectiveCamera).fov,
        targetFov,
        0.08,
      )
      ;(camera as THREE.PerspectiveCamera).updateProjectionMatrix()
    }
  })

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 64]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          wireframe
        />
      </mesh>

      {showDebug && (
        <>
          <Line points={curvePoints} color="#ff6b00" lineWidth={2} dashed dashScale={2} />
          {waypoints.map((wp, i) => (
            <mesh key={i} position={[wp.x, wp.y, wp.z]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshBasicMaterial color={i === 0 ? "#00ff00" : i === waypoints.length - 1 ? "#ff0000" : "#ffff00"} />
            </mesh>
          ))}
          <mesh position={[targetPosition.current.x, targetPosition.current.y, targetPosition.current.z]}>
            <boxGeometry args={[0.1, 0.1, 0.2]} />
            <meshBasicMaterial color="#00ffff" />
          </mesh>
        </>
      )}
    </>
  )
}

interface SentientSphereProps {
  scrollProgress?: number
  waypoints?: CameraWaypoint[]
  showDebug?: boolean
  settings?: SphereSettings
}

export function SentientSphere({
  scrollProgress = 0,
  waypoints = defaultWaypoints,
  showDebug = false,
  settings = defaultSphereSettings,
}: SentientSphereProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-white/10 animate-pulse" />
      </div>
    )
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="w-full my-0 h-full py-0"
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <ambientLight intensity={0.5} />
      <Sphere scrollProgress={scrollProgress} waypoints={waypoints} showDebug={showDebug} settings={settings} />
    </Canvas>
  )
}
