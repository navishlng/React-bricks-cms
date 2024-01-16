'use client'

import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

import { isAdmin, types } from 'react-bricks/rsc'
import { bgColors } from '../../colors'
import Container from './Container'

export type Border = 'full' | 'boxed' | 'none'

interface SectionProps {
  backgroundColor?: { color: string; className: string }
  backgroundImage?: types.IImageSource
  backgroundImageDark?: types.IImageSource
  borderTop?: Border
  borderBottom?: Border
  className?: string
  children?: React.ReactNode
  noOverflowX?: boolean
}

const Section: React.FC<SectionProps> = ({
  backgroundColor = bgColors.WHITE.value,
  backgroundImage,
  backgroundImageDark,
  borderTop = 'none',
  borderBottom = 'none',
  className = '',
  noOverflowX = false,
  children,
}) => {
  const bgColor = backgroundColor.className

  const { isDarkColorMode, toggleColorMode } = {
    isDarkColorMode: false,
    toggleColorMode: () => {},
  }

  const currentTheme = isAdmin()
    ? isDarkColorMode
      ? 'dark'
      : 'light'
    : typeof window === 'undefined'
    ? ''
    : localStorage.getItem('color-mode')

  const [bgStyle, setBgStyle] = useState<string>('none')

  useEffect(() => {
    currentTheme === 'light'
      ? setBgStyle(backgroundImage ? `url(${backgroundImage.src})` : 'none')
      : setBgStyle(
          backgroundImageDark ? `url(${backgroundImageDark.src})` : 'none'
        )
  }, [currentTheme, backgroundImage, backgroundImageDark])

  return (
    <>
      <section
        style={{ backgroundImage: bgStyle }}
        className={classNames(
          bgColor,
          className,
          {
            'overflow-x-hidden': noOverflowX,
          },
          `bg-no-repeat bg-cover bg-center`
        )}
      >
        {borderTop !== 'none' && (
          <Container
            size={borderTop === 'boxed' ? 'medium' : 'full'}
            paddingBottom="0"
            paddingTop="0"
          >
            <hr className="border-black/10" />
          </Container>
        )}
        {children}
        {borderBottom !== 'none' && (
          <Container
            size={borderBottom === 'boxed' ? 'medium' : 'full'}
            paddingBottom="0"
            paddingTop="0"
          >
            <hr className="border-black/10" />
          </Container>
        )}
      </section>
    </>
  )
}

export default Section
