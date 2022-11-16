import React from 'react'

import { heading } from './index.css'

import type { HeadFC } from 'gatsby'

import Layout from '@/components/layout'

const IndexPage = () => (
  <Layout>
    <h1 className={heading}>Hello world!</h1>
  </Layout>
)

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
