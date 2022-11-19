import { HeadFC } from 'gatsby'
import React from 'react'

import * as style from './index.css'

import Seo from '@/components/Seo'
import Layout from '@/components/layout'

const IndexPage = () => (
  <Layout>
    <h1 className={style.heading}>Hello world!</h1>
  </Layout>
)

export default IndexPage

export const Head: HeadFC = () => <Seo routeName="Home" />
