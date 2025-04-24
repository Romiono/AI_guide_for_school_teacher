import { ReactElement } from 'react'
import type { Navigation } from '@toolpad/core/AppProvider'
import { ReactRouterAppProvider } from '@toolpad/core/react-router'
import { Outlet } from 'react-router-dom'

export const App = (): ReactElement => {
  const Navigation: Navigation = [
    {
      segment: 'documentation',
      title: 'Документация',
      children: [
        {
          title: 'Генераторы текса',
          children: [
            {
              title: 'Qwen',
              segment: 'qwen'
            },
            {
              title: 'Deepseek',
              segment: 'deepseek'
            }
          ]
        },
        {
          title: 'Генераторы картинок',
          children: [
            {
              title: 'Krea',
              segment: 'krea'
            }
          ]
        },
        {
          title: 'Генераторы песен',
          children: [
            {
              title: 'Suno',
              segment: 'suno'
            }
          ]
        },
        {
          title: 'Генераторы презентаций',
          children: [
            {
              title: 'Gamma',
              segment: 'gamma'
            }
          ]
        },
        {
          title: 'Как распознать ИИ',
          segment: 'fakes'
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
