// src/utils/constants.ts

// API Configuration
export const DEFAULT_API_URL = 'https://cdn77.api.userway.org/api/img-dscr/v2/WxoHuxQ8KD/1752791/GSZKN1rUeSAJMi91/alts.json?dto=%7B%22sorted%22%3A%5B%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fa.mktgcdn.com%2Fp%2FjV33sLDHfZ6nS3NCFoG0FiXjjxNUEUk7mnLaoEbgHf8%2F1920x583.jpg%22%2C%22alt%22%3A%22BREITLING%20BOUTIQUE%20PUNE%22%2C%22dir%22%3A%22RO%22%7D%2C%7B%22src%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fapi%2Fimage-proxy%2Fimages.ctfassets.net%2F11yu5j5b14kx%2F1gG5P1CYo652jCQws0sEHn%2F810073117b6c6e74531288215ba8a155%2Fstrap_horizontal.png%22%2C%22alt%22%3A%22A%20bracelet%20set%20with%20different%20bracelets%20plus%20changing%20tool.%22%2C%22dir%22%3A%22RO%22%7D%5D%2C%22tier%22%3A%22PAID_QUOTA_TIER%22%2C%22pageUrl%22%3A%22https%3A%2F%2Fwww.breitling.com%2Fin-en%2F%22%7D'

// Fallback Images
export const FALLBACK_IMAGE_SRC = '/bricks-preview-images/strap_horizontal.jpeg'
export const FALLBACK_IMAGE_ALT = 'Breitling Strap Collection'

// Styling Constants
export const PADDING_CLASSES = {
  big: 'p-8',
  medium: 'p-6',
  small: 'p-4',
} as const

// API Configuration
export const API_CONFIG = {
  CACHE_DURATION: 300, // 5 minutes
  HEADERS: {
    'Content-Type': 'application/json',
  },
  TIMEOUT: 10000, // 10 seconds
} as const

// Component Default Values
export const DEFAULT_PROPS = {
  PADDING: 'small' as const,
  BUTTON_LINK: '#',
  TITLE: 'BREITLING STRAP',
  DESCRIPTION: 'Pursue excellence, embrace our strap collection through Breitling style.',
  BUTTON_TEXT: 'DISCOVER STRAPS',
} as const

// React Bricks Configuration
export const BRICK_CONFIG = {
  PREVIEW_IMAGE: '/bricks-preview-images/cards.png',
  BRICK_NAME: 'breitling-strap',
  BRICK_LABEL: 'Breitling Strap',
} as const

// Validation Messages
export const VALIDATION_MESSAGES = {
  API_URL_REQUIRED: 'API URL is required',
  INVALID_URL: 'Please enter a valid URL',
} as const