// context/StrapDataContext.tsx
'use client'
import { createContext, useContext } from 'react'
import { StrapData } from '../lib/types/breitling'

export const StrapDataContext = createContext<StrapData | null>(null)

export const useStrapData = () => useContext(StrapDataContext)
