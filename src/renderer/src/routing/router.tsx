import { createHashRouter } from 'react-router-dom'

import App from '@renderer/App'
import Layout from '@renderer/layout/Layout'
import DocumentPage from '@renderer/routing/pages/DocumentPage/DocumentPage'
import allImagesPage from "@renderer/routing/pages/allImagesPage/allImagesPage";

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
            Component: allImagesPage
          },
          {
            path: '/documentation/:ntId',
            Component: DocumentPage
          },
        ]
      }
    ]
  }
])
