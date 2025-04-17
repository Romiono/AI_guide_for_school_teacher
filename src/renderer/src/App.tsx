import { ReactElement } from 'react'
import type { Navigation } from '@toolpad/core/AppProvider'
import { ReactRouterAppProvider } from '@toolpad/core/react-router'
import { Outlet } from 'react-router-dom'

export const App = (): ReactElement => {
  const Navigation: Navigation = [
    {
      segment: 'documentation',
      pattern: 'AppTitle',
      children: [
        {
          title: 'Text Ai',
          children: [
            {
              title: 'Qwen',
              segment: 'qwen'
            }
          ]
        },
        {
          title: 'Image Ai',
          children: [
            {
              title: 'Krea',
              segment: 'krea'
            }
          ]
        },
        {
          title: 'Audio AI',
          children: [
            {
              title: 'Suno',
              segment: 'suno'
            }
          ]
        },
        {
          title: 'Presentation AI',
          children: [
            {
              title: 'Gamma',
              segment: 'gamma'
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
