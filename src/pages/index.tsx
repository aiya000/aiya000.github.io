import { HeadFC } from 'gatsby'
import React from 'react'

import * as style from './index.css'

import Seo from '@/components/Seo'
import Layout from '@/components/layout'

const IndexPage = () => (
  <Layout className={style.container}>
    <img src="/images/perolala.png" alt="logo" className={style.logo} />
    <h1 className={style.blogName}>aiya000のメモ帳</h1>
  </Layout>
)

export default IndexPage

export const Head: HeadFC = () => <Seo routeName="Home" />
