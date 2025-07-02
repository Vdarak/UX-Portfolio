'use client'

import React, { ReactNode } from 'react'

interface FlowingTextProps {
  text?: string
  children?: ReactNode
  className?: string
  delay?: number // Animation delay in seconds
  colors?: string[]
  animationSpeed?: number
  showBorder?: boolean
}

/**
 * FlowingText: A subtle lens into flowing color
 * 
 * Creates a gentle, almost imperceptible gradient that flows through text,
 * giving a sophisticated animated effect. The animation is deliberately slow
 * and subtle, creating a sense of calm elegance rather than drawing attention.
 * 
 * The default colors blend shades of purple with a touch of blue, creating
 * a rich, luxurious feel that works well against both light and dark backgrounds.
 * 
 * Example usage with text prop (original API):
 * ```tsx
 * <FlowingText text="thoughtful" className="inline" />
 * ```
 * 
 * Example usage with children (modern API):
 * ```tsx
 * <FlowingText
 *   colors={["#8b5cf6", "#c084fc", "#4079ff", "#c084fc", "#8b5cf6"]}
 *   animationSpeed={8}
 *   showBorder={false}
 * >
 *   Add a splash of color!
 * </FlowingText>
 * ```
 */
export const FlowingText: React.FC<FlowingTextProps> = ({
  text,
  children,
  className = '',
  delay = 0,
  colors = ["#8b5cf6", "#c084fc", "#4079ff", "#c084fc", "#8b5cf6"], // Purple gradient with a touch of blue
  animationSpeed = 8, // Slower, more subtle animation
  showBorder = false
}) => {
  // Support both text prop and children prop
  const content = text || children;
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
    animationDelay: `${delay}s`,
  };

  // If we're using the component inline (with className containing "inline"),
  // ensure it behaves like an inline element to preserve text flow
  const isInline = className?.includes('inline');

  return (
    <span
      className={`${isInline ? 'inline-block' : 'relative flex max-w-fit items-center justify-center'} 
        ${showBorder ? 'rounded-[1.25rem]' : ''} 
        ${isInline ? '' : 'font-medium overflow-hidden'} 
        ${className}`}
      role="text"
      aria-label={typeof content === 'string' ? content : undefined}
    >
      {showBorder && !isInline && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-subtle-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "200% 100%",
          }}
        >
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      )}
      <span
        className={`${isInline ? 'inline' : 'inline-block relative z-2'} text-transparent bg-cover animate-subtle-gradient`}
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "200% 100%", // Smaller size for more subtle movement
        }}
      >
        {content}
      </span>
    </span>
  )
}

// Export a named alias for backward compatibility and better semantics
export const GradientText = FlowingText;
