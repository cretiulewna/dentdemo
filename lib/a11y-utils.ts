/**
 * Accessibility utilities and helpers
 */

// Focus management
export const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus()
    // Ensure scrolling to the element
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

// Trap focus within an element (useful for modals)
export const trapFocus = (element: HTMLElement, event: KeyboardEvent) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

  if (event.shiftKey) {
    if (document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    }
  } else {
    if (document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }
}

// Announce content to screen readers
export const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div')
  announcement.setAttribute('role', 'status')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  document.body.appendChild(announcement)

  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Keyboard shortcut handler
export const handleKeyboardShortcut = (
  event: KeyboardEvent,
  shortcut: string,
  callback: () => void
) => {
  const { key, ctrlKey, metaKey, altKey, shiftKey } = event
  const [requiredKey, ...modifiers] = shortcut.toLowerCase().split('+')

  if (key.toLowerCase() === requiredKey) {
    const hasCtrl = modifiers.includes('ctrl') && (ctrlKey || metaKey)
    const hasAlt = modifiers.includes('alt') && altKey
    const hasShift = modifiers.includes('shift') && shiftKey
    const noModifiers = modifiers.length === 0

    if (noModifiers || hasCtrl || hasAlt || hasShift) {
      event.preventDefault()
      callback()
    }
  }
}

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Generate unique IDs for accessibility
export const generateId = (prefix: string): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}
