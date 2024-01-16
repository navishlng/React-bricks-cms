'use client'

import { Map, Marker } from 'pigeon-maps'
import { maptiler } from 'pigeon-maps/providers'
import React from 'react'

import { LayoutProps } from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'

export interface MapProps extends LayoutProps {
  zoom: string
  lat: string
  lng: string
  mapTilerAccessToken: string
}

export const MapClient: React.FC<MapProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  lat = '45.6782509',
  lng = '9.5669407',
  zoom = '10',
  mapTilerAccessToken,
}) => {
  const mapTilerProvider = React.useCallback(
    (x: number, y: number, z: number, dpr?: number | undefined) =>
      maptiler(mapTilerAccessToken, 'streets')(x, y, z, dpr),
    [mapTilerAccessToken]
  )

  let mapTilerProviderProp = {}

  if (mapTilerAccessToken) {
    mapTilerProviderProp = {
      provider: mapTilerProvider,
    }
  }

  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <Map
          center={[parseFloat(lat), parseFloat(lng)]}
          height={350}
          metaWheelZoom
          zoom={parseInt(zoom, 10)}
          {...mapTilerProviderProp}
          dprs={[1, 2]}
          metaWheelZoomWarning="Use ctrl + wheel to zoom!"
          attribution={false}
        >
          <Marker anchor={[parseFloat(lat), parseFloat(lng)]} />
        </Map>
      </Container>
    </Section>
  )
}

export default MapClient
