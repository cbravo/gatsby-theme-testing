/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react'
import {
  EnhancedProvider,
  IntroProvider
} from '@klickmarketing/react-components'

export const wrapRootElement = ({ element }) => {
  return (
      <EnhancedProvider>
        <IntroProvider>{element}</IntroProvider>
      </EnhancedProvider>
  )
}
