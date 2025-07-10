/**
 * scroll-animations.tsx
 *
 * Collection of React animation components leveraging Framer Motion and GSAP ScrollTrigger.
 * - FadeIn: Fade-and-slide entrance when element scrolls into view.
 * - StaggerContainer: Parent wrapper to orchestrate staggered child animations.
 * - StaggerItem: Child animations coordinated by StaggerContainer.
 * - Parallax: Vertical parallax effect based on scroll position.
 * - ScaleOnScroll: Dynamic scaling and opacity change on scroll.
 * - ScrollReveal: GSAP-based text reveal with rotation, blur, and opacity transitions.
 */

"use client"

import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * FadeInProps defines configuration for FadeIn component.
 * @property children - Content to animate.
 * @property delay - Delay (in seconds) before starting animation.
 * @property direction - Slide-in direction for initial offset.
 * @property className - Additional CSS classes for wrapper.
 * @property shouldAnimate - Toggle to enable/disable animation.
 */
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  shouldAnimate?: boolean;
}

/**
 * FadeIn
 *
 * Wraps content in a motion.div that:
 * - Starts hidden with opacity 0 and offset in specified direction.
 * - Uses useInView to detect when element enters viewport.
 * - Animates to opacity 1 and original position once in view.
 * - Supports configurable delay, direction, and toggle.
 */
export function FadeIn({ children, delay = 0, direction = "up", className, shouldAnimate = true }: FadeInProps) {
  // ref to attach to DOM for viewport detection
  const ref = useRef(null);
  // detect first time element is in viewport (trigger slightly later)
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  // mapping directions to initial x/y offsets
  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={
        isInView && shouldAnimate
          ? { opacity: 1, x: 0, y: 0 }
          : {}
      }
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainerProps defines configuration for StaggerContainer component.
 * @property children - Items to stagger.
 * @property className - CSS classes for wrapper.
 * @property staggerDelay - Delay between each child's animation start.
 * @property shouldAnimate - Toggle to enable/disable stagger effect.
 */
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  shouldAnimate?: boolean;
}

/**
 * StaggerContainer
 *
 * Parent wrapper that uses motion.div variants to stagger children
 * implementing entry animation in sequence. Children must use
 * matching variants (e.g., StaggerItem) to animate.
 */
export function StaggerContainer({ children, className, staggerDelay = 0.1, shouldAnimate = true }: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView && shouldAnimate ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem
 *
 * Wraps individual item participating in StaggerContainer.
 * Defines hidden and visible variants for opacity and slide.
 */
export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ParallaxProps defines configuration for Parallax component.
 * @property children - Content to apply parallax effect.
 * @property offset - Maximum vertical translation offset in px.
 * @property className - CSS classes for wrapper.
 */
interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

/**
 * Parallax
 *
 * Applies a vertical parallax effect to children based on scroll position.
 * Uses useScroll and useTransform to map scroll progress to y translation.
 */
export function Parallax({ children, offset = 50, className }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * ScaleOnScrollProps defines configuration for ScaleOnScroll component.
 * @property children - Content to apply scale effect.
 * @property className - CSS classes for wrapper.
 */
interface ScaleOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * ScaleOnScroll
 *
 * Scales and fades content based on scroll progress.
 * scale: maps from 0.8→1→0.8 over scroll progress.
 * opacity: maps from 0→1→1→0 for a smooth fade in/out effect.
 */
export function ScaleOnScroll({ children, className }: ScaleOnScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealProps defines configuration for GSAP-based text reveal.
 * @property children - Plain text to split into words for animation.
 * @property scrollContainerRef - Optional scroll container for GSAP.
 * @property enableBlur - Toggle blur animation on words.
 * @property baseOpacity - Starting opacity for words.
 * @property baseRotation - Initial rotation angle for reveal.
 * @property blurStrength - Blur amount in px.
 * @property containerClassName - CSS for <h2> wrapper.
 * @property textClassName - CSS for inner <p> text.
 * @property rotationEnd - ScrollTrigger end position for rotation.
 * @property wordAnimationEnd - ScrollTrigger end for word reveal.
 */
interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

/**
 * ScrollReveal
 *
 * Uses GSAP ScrollTrigger to animate text reveal:
 * - Initial rotation to 0
 * - Opacity from baseOpacity→1
 * - Optional blur reduction from blurStrength→0
 * Splits text by word and staggers animations.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  // Split text into words and spaces for individual GSAP targeting
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) =>
      word.match(/^\s+$/)
        ? word
        : (<span className="inline-block word" key={index}>{word}</span>)
    );
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Determine scroller: custom or window
    const scroller = scrollContainerRef?.current || window;

    // Rotate reveal animation
    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      { rotate: 0, ease: "none", scrollTrigger: { trigger: el, scroller, start: "top bottom", end: rotationEnd, scrub: true } }
    );

    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    // Opacity reveal
    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      { opacity: 1, stagger: 0.05, ease: "none", scrollTrigger: { trigger: el, scroller, start: "top bottom-=20%", end: wordAnimationEnd, scrub: true } }
    );

    // Optional blur reveal
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        { filter: "blur(0px)", stagger: 0.05, ease: "none", scrollTrigger: { trigger: el, scroller, start: "top bottom-=20%", end: wordAnimationEnd, scrub: true } }
      );
    }

    // Cleanup ScrollTrigger instances for this element
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}>{splitText}</p>
    </h2>
  );
};
