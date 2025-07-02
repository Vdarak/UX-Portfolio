'use client'

// This file is now just a re-export for backward compatibility
import { FlowingText as GradientText } from './flowing-text'

/**
 * GradientText: A subtle, flowing gradient for text elements
 * 
 * This component is now consolidated with FlowingText.
 * This file exists for backward compatibility.
 * 
 * Please import from './flowing-text' directly:
 * ```tsx
 * import { FlowingText, GradientText } from './flowing-text'
 * ```
 * 
 * Features:
 * - Subtle purple gradient animation (slow and elegant)
 * - Optional bordered container
 * - Support for both text prop and children
 * - Maintains proper text alignment in inline contexts
 * 
 * Example:
 * ```tsx
 * <GradientText>Elegant flowing text</GradientText>
 * ```
 */

export default GradientText
