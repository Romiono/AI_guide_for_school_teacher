import { ReactElement } from 'react'
import type { Navigation } from '@toolpad/core/AppProvider'
import { ReactRouterAppProvider } from '@toolpad/core/react-router'
import { Outlet } from 'react-router-dom'

export const App = (): ReactElement => {
  const Navigation: Navigation = [
    {
      segment: 'documentation',
      // kind: 'header',
      children: [
        {
          title: 'Text Ai',
          children: [
            {
              title: 'qwen',
              segment: 'qwen'
            },
            {
              kind: 'divider'
            }
          ]
        },
        {
          title: 'Image Ai',
          // segment: '',
          children: [
            {
              kind: 'divider'
            }
          ]
        },
        {
          title: 'Audio AI',
          // segment: '',
          children: [
            {
              title: 'suno',
              segment: 'suno'
            },
            {
              kind: 'divider'
            }
          ]
        }
      ]
    }
  ]

  const brand = {
    title: 'Документация по нейронным сетям'
  }
  return (
    <>
      <ReactRouterAppProvider navigation={Navigation} branding={brand}>
        <Outlet />
      </ReactRouterAppProvider>
    </>
  )
}

export default App
