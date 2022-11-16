import React from 'react'

import Navbar from '@/components/navbar'

/**
 * The default layout.
 */
const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main>
    <Navbar />
    <div>{children}</div>
  </main>
)

export default Layout
