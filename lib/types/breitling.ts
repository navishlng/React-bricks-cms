// src/lib/types/breitling.ts
import { types } from 'react-bricks/rsc'

// Basic image data structure
export interface ImageData {
  src: string
  alt: string
}

// Strap data returned from API
export interface StrapData {
  image: ImageData
}

// API response structure based on your endpoint
export interface ApiResponse {
  payload?: {
    missingAlts?: Array<{
      src: string
      alt?: string
      dir?: string
    }>
    items?: Array<{
      src: string
      alt?: string
      dir?: string
    }>
  }
  tier?: string
  pageUrl?: string
}

// Padding options
export type PaddingSize = 'big' | 'medium' | 'small'

// Main component props
export interface BreitlingStrapProps {
  padding: PaddingSize
  title: types.TextValue
  description: types.TextValue
  buttonText: types.TextValue
  buttonLink: string
  apiUrl?: string
  customImageSrc?: string
  customImageAlt?: string
  preloadedImageSrc?: string
  preloadedImageAlt?: string
}

// Wrapper component props (excludes preloaded props)
export type BreitlingStrapWrapperProps = Omit<
  BreitlingStrapProps, 
  'preloadedImageSrc' | 'preloadedImageAlt'
> & {
  apiUrl?: string // Make apiUrl optional for wrapper
}

// Schema props for React Bricks
export interface BreitlingStrapSchemaProps {
  padding: PaddingSize
  title: types.TextValue
  description: types.TextValue
  buttonText: types.TextValue
  buttonLink: string
  apiUrl: string
  customImageSrc: string
  customImageAlt: string
}

// Side edit prop configuration
export interface SideEditProp {
  name: keyof BreitlingStrapSchemaProps
  label: string
  type: types.SideEditPropType
  selectOptions?: {
    display: types.OptionsDisplay
    options: Array<{ value: string; label: string }>
  }
  validate?: (value: string) => string | true
}

// Error types for better error handling
export interface ApiError {
  message: string
  status?: number
  code?: string
}

// Success response wrapper
export interface ApiSuccess<T> {
  data: T
  timestamp: number
  cached: boolean
}

// Generic API response wrapper
export type ApiResult<T> = ApiSuccess<T> | ApiError

// Configuration types
export interface ApiConfig {
  CACHE_DURATION: number
  HEADERS: Record<string, string>
  TIMEOUT: number
}

export interface BrickConfig {
  PREVIEW_IMAGE: string
  BRICK_NAME: string
  BRICK_LABEL: string
}

export interface DefaultProps {
  PADDING: PaddingSize
  BUTTON_LINK: string
  TITLE: string
  DESCRIPTION: string
  BUTTON_TEXT: string
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] }