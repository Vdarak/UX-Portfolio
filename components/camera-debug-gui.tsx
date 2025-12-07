"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react"
import {
  type CameraWaypoint,
  type SphereSettings,
  type ColorMode,
  defaultWaypoints,
  defaultSphereSettings,
} from "./sentient-sphere"

interface CameraDebugGUIProps {
  waypoints: CameraWaypoint[]
  onWaypointsChange: (waypoints: CameraWaypoint[]) => void
  scrollProgress: number
  showDebug: boolean
  onShowDebugChange: (show: boolean) => void
  sphereSettings: SphereSettings
  onSphereSettingsChange: (settings: SphereSettings) => void
}

export function CameraDebugGUI({
  waypoints,
  onWaypointsChange,
  scrollProgress,
  showDebug,
  onShowDebugChange,
  sphereSettings,
  onSphereSettingsChange,
}: CameraDebugGUIProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedWaypoint, setSelectedWaypoint] = useState(0)
  const [activeTab, setActiveTab] = useState<"camera" | "sphere">("camera")

  const updateWaypoint = (index: number, field: keyof CameraWaypoint, value: number) => {
    const newWaypoints = [...waypoints]
    newWaypoints[index] = { ...newWaypoints[index], [field]: value }
    onWaypointsChange(newWaypoints)
  }

  const resetWaypoints = () => {
    onWaypointsChange([...defaultWaypoints])
  }

  const updateColor = (key: keyof SphereSettings["colors"], value: string) => {
    onSphereSettingsChange({
      ...sphereSettings,
      colors: { ...sphereSettings.colors, [key]: value },
    })
  }

  const resetSphereSettings = () => {
    onSphereSettingsChange({ ...defaultSphereSettings })
  }

  const copyToClipboard = () => {
    const config = {
      waypoints,
      sphereSettings,
    }
    const code = `// Camera & Sphere Configuration\nconst config = ${JSON.stringify(config, null, 2)}`
    navigator.clipboard.writeText(code)
  }

  const colorModes: { value: ColorMode; label: string; description: string }[] = [
    { value: "cycle", label: "Cycle", description: "Colors transition over time" },
    { value: "gradient", label: "Gradient", description: "Surface gradient of all 3 colors" },
    { value: "layers", label: "Layers", description: "Concentric color layers" },
  ]

  return (
    <div className="fixed top-20 right-4 z-[100] font-mono text-xs pointer-events-auto">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 bg-black/90 border border-white/20 px-3 py-2 rounded-lg mb-2 hover:border-accent transition-colors"
      >
        <span className="text-accent">Debug GUI</span>
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {isExpanded && (
        <div className="bg-black/95 border border-white/20 rounded-lg p-4 w-80 max-h-[80vh] overflow-y-auto">
          {/* Scroll Progress */}
          <div className="mb-4 pb-4 border-b border-white/10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/60">Scroll Progress</span>
              <span className="text-accent">{(scrollProgress * 100).toFixed(1)}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-100"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>

          {/* Show Debug Toggle */}
          <div className="mb-4 pb-4 border-b border-white/10">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showDebug}
                onChange={(e) => onShowDebugChange(e.target.checked)}
                className="accent-accent"
              />
              <span className="text-white/80">Show Path Visualization</span>
            </label>
          </div>

          <div className="flex gap-1 mb-4">
            <button
              onClick={() => setActiveTab("camera")}
              className={`flex-1 px-3 py-2 rounded text-xs transition-colors ${
                activeTab === "camera" ? "bg-accent text-black" : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              Camera
            </button>
            <button
              onClick={() => setActiveTab("sphere")}
              className={`flex-1 px-3 py-2 rounded text-xs transition-colors ${
                activeTab === "sphere" ? "bg-accent text-black" : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              Sphere
            </button>
          </div>

          {activeTab === "camera" && (
            <>
              {/* Waypoint Selector */}
              <div className="mb-4">
                <span className="text-white/60 block mb-2">Waypoints</span>
                <div className="flex gap-1 flex-wrap">
                  {waypoints.map((wp, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedWaypoint(i)}
                      className={`px-2 py-1 rounded text-[10px] transition-colors ${
                        selectedWaypoint === i ? "bg-accent text-black" : "bg-white/10 text-white/60 hover:bg-white/20"
                      }`}
                    >
                      {wp.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Waypoint Controls */}
              <div className="space-y-3 mb-4 pb-4 border-b border-white/10">
                <div className="text-accent mb-2">{waypoints[selectedWaypoint].label}</div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white/60">X Position</span>
                    <span className="text-white">{waypoints[selectedWaypoint].x.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="-20"
                    max="20"
                    step="0.1"
                    value={waypoints[selectedWaypoint].x}
                    onChange={(e) => updateWaypoint(selectedWaypoint, "x", Number.parseFloat(e.target.value))}
                    className="w-full accent-accent"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white/60">Y Position</span>
                    <span className="text-white">{waypoints[selectedWaypoint].y.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="-20"
                    max="20"
                    step="0.1"
                    value={waypoints[selectedWaypoint].y}
                    onChange={(e) => updateWaypoint(selectedWaypoint, "y", Number.parseFloat(e.target.value))}
                    className="w-full accent-accent"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white/60">Z Position</span>
                    <span className="text-white">{waypoints[selectedWaypoint].z.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="30"
                    step="0.1"
                    value={waypoints[selectedWaypoint].z}
                    onChange={(e) => updateWaypoint(selectedWaypoint, "z", Number.parseFloat(e.target.value))}
                    className="w-full accent-accent"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white/60">FOV</span>
                    <span className="text-white">{waypoints[selectedWaypoint].fov.toFixed(0)}°</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="120"
                    step="1"
                    value={waypoints[selectedWaypoint].fov}
                    onChange={(e) => updateWaypoint(selectedWaypoint, "fov", Number.parseFloat(e.target.value))}
                    className="w-full accent-accent"
                  />
                </div>
              </div>

              <button
                onClick={resetWaypoints}
                className="flex items-center gap-1 px-3 py-2 bg-white/10 hover:bg-white/20 rounded transition-colors w-full justify-center"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Camera</span>
              </button>
            </>
          )}

          {activeTab === "sphere" && (
            <>
              <div className="mb-4 pb-4 border-b border-white/10">
                <span className="text-white/60 block mb-3">Color Mode</span>
                <div className="space-y-2">
                  {colorModes.map((mode) => (
                    <button
                      key={mode.value}
                      onClick={() => onSphereSettingsChange({ ...sphereSettings, colorMode: mode.value })}
                      className={`w-full px-3 py-2 rounded text-left transition-colors ${
                        sphereSettings.colorMode === mode.value
                          ? "bg-accent text-black"
                          : "bg-white/10 text-white/60 hover:bg-white/20"
                      }`}
                    >
                      <div className="font-medium">{mode.label}</div>
                      <div
                        className={`text-[10px] ${sphereSettings.colorMode === mode.value ? "text-black/60" : "text-white/40"}`}
                      >
                        {mode.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-4 pb-4 border-b border-white/10">
                <span className="text-white/60 block mb-3">Colors (Research / Design / Code)</span>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={sphereSettings.colors.research}
                      onChange={(e) => updateColor("research", e.target.value)}
                      className="w-10 h-8 rounded cursor-pointer border-0 bg-transparent"
                    />
                    <span className="text-amber-400">Research</span>
                    <span className="text-white/40 ml-auto">{sphereSettings.colors.research}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={sphereSettings.colors.design}
                      onChange={(e) => updateColor("design", e.target.value)}
                      className="w-10 h-8 rounded cursor-pointer border-0 bg-transparent"
                    />
                    <span className="text-pink-400">Design</span>
                    <span className="text-white/40 ml-auto">{sphereSettings.colors.design}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={sphereSettings.colors.code}
                      onChange={(e) => updateColor("code", e.target.value)}
                      className="w-10 h-8 rounded cursor-pointer border-0 bg-transparent"
                    />
                    <span className="text-emerald-400">Code</span>
                    <span className="text-white/40 ml-auto">{sphereSettings.colors.code}</span>
                  </div>
                </div>
              </div>

              {/* Color Transition Speed */}
              <div className="mb-4 pb-4 border-b border-white/10">
                <div className="flex justify-between mb-2">
                  <span className="text-white/60">Color Transition Speed</span>
                  <span className="text-white">{sphereSettings.colorTransitionSpeed.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="2"
                  step="0.05"
                  value={sphereSettings.colorTransitionSpeed}
                  onChange={(e) =>
                    onSphereSettingsChange({
                      ...sphereSettings,
                      colorTransitionSpeed: Number.parseFloat(e.target.value),
                    })
                  }
                  className="w-full accent-accent"
                />
              </div>

              {/* Rotation Speed */}
              <div className="mb-4 pb-4 border-b border-white/10">
                <div className="flex justify-between mb-2">
                  <span className="text-white/60">Rotation Speed</span>
                  <span className="text-white">{sphereSettings.rotationSpeed.toFixed(3)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.5"
                  step="0.005"
                  value={sphereSettings.rotationSpeed}
                  onChange={(e) =>
                    onSphereSettingsChange({
                      ...sphereSettings,
                      rotationSpeed: Number.parseFloat(e.target.value),
                    })
                  }
                  className="w-full accent-accent"
                />
              </div>

              {/* Rotation Direction */}
              <div className="mb-4 pb-4 border-b border-white/10">
                <span className="text-white/60 block mb-2">Rotation Direction</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => onSphereSettingsChange({ ...sphereSettings, rotationDirection: 1 })}
                    className={`flex-1 px-3 py-2 rounded text-xs transition-colors ${
                      sphereSettings.rotationDirection === 1
                        ? "bg-accent text-black"
                        : "bg-white/10 text-white/60 hover:bg-white/20"
                    }`}
                  >
                    Clockwise
                  </button>
                  <button
                    onClick={() => onSphereSettingsChange({ ...sphereSettings, rotationDirection: -1 })}
                    className={`flex-1 px-3 py-2 rounded text-xs transition-colors ${
                      sphereSettings.rotationDirection === -1
                        ? "bg-accent text-black"
                        : "bg-white/10 text-white/60 hover:bg-white/20"
                    }`}
                  >
                    Counter-CW
                  </button>
                </div>
              </div>

              {/* Rotation Axis */}
              <div className="mb-4 pb-4 border-b border-white/10">
                <span className="text-white/60 block mb-2">Rotation Axis</span>
                <div className="flex gap-1 flex-wrap">
                  {(["x", "y", "z", "xy", "xz", "yz", "xyz"] as const).map((axis) => (
                    <button
                      key={axis}
                      onClick={() => onSphereSettingsChange({ ...sphereSettings, rotationAxis: axis })}
                      className={`px-3 py-1 rounded text-xs uppercase transition-colors ${
                        sphereSettings.rotationAxis === axis
                          ? "bg-accent text-black"
                          : "bg-white/10 text-white/60 hover:bg-white/20"
                      }`}
                    >
                      {axis}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={resetSphereSettings}
                className="flex items-center gap-1 px-3 py-2 bg-white/10 hover:bg-white/20 rounded transition-colors w-full justify-center"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Sphere</span>
              </button>
            </>
          )}

          {/* Copy Config Button */}
          <button
            onClick={copyToClipboard}
            className="mt-4 w-full px-3 py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded transition-colors"
          >
            Copy Full Config
          </button>

          {/* Legend */}
          <div className="mt-4 pt-4 border-t border-white/10 text-[10px] text-white/40">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Start point</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <span>Intermediate points</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span>End point</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500" />
              <span>Current camera position</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
