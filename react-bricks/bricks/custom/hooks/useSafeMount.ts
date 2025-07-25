'use client'

import { useEffect, useRef } from 'react'

/**
 * Custom hook to safely handle component mounting and prevent 
 * errors during unmounting, especially useful for Tippy.js issues
 */
export const useSafeMount = () => {
  const isMountedRef = useRef(false)

  useEffect(() => {
    isMountedRef.current = true
    
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const safeSetState = (callback: () => void) => {
    if (isMountedRef.current) {
      callback()
    }
  }

  return { isMounted: isMountedRef.current, safeSetState }
}

/**
 * Custom hook to handle DOM node validation for Tippy.js
 */
export const useDOMNodeValidator = () => {
  const validateNode = (node: any): node is Node => {
    if (!node) return false
    
    try {
      // Check if node is a valid DOM node
      return (
        node instanceof Node ||
        (node.nodeType !== undefined && 
         node.nodeName !== undefined &&
         typeof node.appendChild === 'function')
      )
    } catch {
      return false
    }
  }

  return { validateNode }
}

export default useSafeMount
