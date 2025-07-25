'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { register } from 'react-bricks/rsc'
import { ReactBricks } from 'react-bricks/rsc/client'

import NextLink from '@/react-bricks/NextLink'
import config from '@/react-bricks/config'
import { useTippyErrorHandler } from '@/react-bricks/bricks/custom/hooks/useTippyErrorHandler'

export default function ReactBricksApp({
  children,
}: {
  readonly children: React.ReactNode
}) {
  const router = useRouter()
  
  // Initialize Tippy.js error handler
  useTippyErrorHandler()

  const reactBricksConfig = {
    ...config,
    navigate: (path: string) => {
      router.push(path)
    },
    renderLocalLink: NextLink,
  }

  register(reactBricksConfig)

  return <ReactBricks {...reactBricksConfig}>{children as any}</ReactBricks>
}
