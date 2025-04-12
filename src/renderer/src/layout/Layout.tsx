import { Outlet } from 'react-router'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
// import { PageContainer } from '@toolpad/core/PageContainer'
import { ReactElement } from 'react'

const Layout = (): ReactElement => {
  return (
    <DashboardLayout>
      {/*<PageContainer>*/}
      <Outlet />
      {/*</PageContainer>*/}
    </DashboardLayout>
  )
}

export default Layout
