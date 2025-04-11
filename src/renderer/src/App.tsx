import { ReactElement } from 'react'
import type { Navigation } from '@toolpad/core/AppProvider'
import { ReactRouterAppProvider } from '@toolpad/core/react-router'
import { Outlet } from 'react-router-dom'

export const App = (): ReactElement => {
  const Navigation: Navigation = [
    {
      title: 'Text Ai',
      segment: 'documentation',
      children: [
        {
          title: 'deepseek',
          segment: 'deepseek'
        },
        {
          title: 'yandexgpt',
          segment: 'yandexgpt'
        },
        {
          title: 'gigachat',
          segment: 'gigachat'
        },
        {
          kind: 'divider'
        }
      ]
    },
    {
      title: 'Image Ai',
      segment: 'documentation',
      children: [
        {
          title: 'stabledifusane',
          segment: 'stabledifusane'
        },
        {
          title: 'dalee',
          segment: 'dalee'
        },
        {
          title: 'midjorney',
          segment: 'midjorney'
        },
        {
          kind: 'divider'
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
