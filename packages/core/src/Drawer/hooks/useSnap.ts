import { useState } from 'react'

/**
 * Custom hook that returns:
 *
 * 1. Snap position of the drawer container
 * 2. Snap drag handler which determins the future snapping position based on current
 *
 * Designed to support 3 snap points.
 */
export function useSnap(snapHeights, snapDimensions) {
  if (!snapHeights || !snapDimensions) {
    return { snapPosition: null, handleSnap: () => {} }
  }

  const [TOP, MIDDLE, BOTTOM] = snapHeights

  const SCROLL_THRESHOLD = 100
  const [snapPosition, setSnapPosition] = useState(MIDDLE)

  const handleSnap = (...args) => {
    const pointerType = args?.[0]?.pointerType // mouse, touch, etc.
    const type = args?.[0]?.type // click, pointerup (drag), pointercancel (scroll)
    const info = args?.[1]
    const scrollOffset = info.offset.y

    const SCROLL_DOWN = scrollOffset > SCROLL_THRESHOLD
    const SCROLL_UP = scrollOffset < -SCROLL_THRESHOLD

    /**
     * Differentiating between content scrolling and container dragging on mobile:
     *
     * 1. Content scrolling:
     *    - Triggered by touch events
     *    - Has a 'pointercancel' event type
     *
     * 2. Container dragging:
     *    - Should not occur accidentally during content scrolling
     *    - Has a 'pointerup' event type
     *
     * To prevent unintended container dragging, we only allow
     * dragging when the event type is specifically 'pointerup'.
     * This ensures smooth content scrolling without accidental
     * container movement.
     */

    if (pointerType === 'touch' && type === 'pointerup') {
      // Scroll down logic
      if (SCROLL_DOWN) {
        if (snapPosition === TOP) setSnapPosition(MIDDLE)
        if (snapPosition === MIDDLE) setSnapPosition(BOTTOM)
      }

      // Scroll up logic
      else if (SCROLL_UP) {
        if (snapPosition === BOTTOM) setSnapPosition(MIDDLE)
        if (snapPosition === MIDDLE) setSnapPosition(TOP)
      }
    }
  }

  return { snapPosition, handleSnap }
}
