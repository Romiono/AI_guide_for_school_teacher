import { createHashRouter } from 'react-router-dom'

import App from '@renderer/App'
import Layout from '@renderer/layout/Layout'
import DocumentPage from '@renderer/routing/pages/DocumentPage/DocumentPage'

export const router = createHashRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '/documentation',
            Component: DocumentPage
          },
          {
            path: '/documentation/:ntId',
            Component: DocumentPage
          }
        ]
      }
    ]
  }
])
