'use client'

import React, { createContext, useContext, ReactNode, useMemo } from 'react'

interface StrapDataType {
  image?: {
    src: string
    alt: string
  }
}

interface StrapDataContextType {
  strapData: StrapDataType | null
}

const StrapDataContext = createContext<StrapDataContextType>({
  strapData: null,
})

export const useStrapData = () => {
  return useContext(StrapDataContext)
}

interface StrapDataProviderProps {
  children: ReactNode
  strapData: StrapDataType | null
}

export const StrapDataProvider: React.FC<StrapDataProviderProps> = ({
  children,
  strapData,
}) => {
  const contextValue = useMemo(() => ({ strapData }), [strapData])
  
  return (
    <StrapDataContext.Provider value={contextValue}>
      {children}
    </StrapDataContext.Provider>
  )
}
