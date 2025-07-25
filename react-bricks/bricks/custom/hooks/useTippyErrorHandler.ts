'use client'

import { useEffect } from 'react'

/**
 * Global error handler for Tippy.js DOM node issues
 * This helps prevent crashes when Tippy.js encounters invalid DOM nodes
 */
export const useTippyErrorHandler = () => {
  useEffect(() => {
    // Store original contains method
    const originalContains = Node.prototype.contains

    // Override contains method to add safety checks
    Node.prototype.contains = function(this: Node, other: Node | null): boolean {
      try {
        // Validate that 'this' is a valid node
        if (!this || typeof this.nodeType !== 'number') {
          return false
        }
        
        // Validate that 'other' is a valid node
        if (!other || typeof other.nodeType !== 'number') {
          return false
        }
        
        // Call original method if both nodes are valid
        return originalContains.call(this, other)
      } catch (error) {
        console.warn('Tippy.js DOM node error caught:', error)
        return false
      }
    }

    // Global error handler for uncaught errors
    const handleGlobalError = (event: ErrorEvent) => {
      if (event.message?.includes('parameter 1 is not of type \'Node\'')) {
        console.warn('Tippy.js Node type error caught and suppressed:', event.error)
        event.preventDefault()
        return false
      }
    }

    // Add global error listener
    window.addEventListener('error', handleGlobalError)

    // Cleanup function
    return () => {
      // Restore original contains method
      Node.prototype.contains = originalContains
      window.removeEventListener('error', handleGlobalError)
    }
  }, [])
}

export default useTippyErrorHandler
