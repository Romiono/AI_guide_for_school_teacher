import { ReactNode } from 'react'

const CenterMd = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {children}
    </div>
  )
}

export default CenterMd
