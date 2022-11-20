import clsx from 'clsx'
import React from 'react'

import * as style from './layout.css'

import Navbar from '@/components/navbar'

export type Props = {
  className?: string
}

/**
 * The default layout.
 */
const Layout: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => (
  <main>
    <Navbar />
    <div className={style.container}>
      <div className={clsx(className, style.content)}>{children}</div>
    </div>
  </main>
)

export default Layout
