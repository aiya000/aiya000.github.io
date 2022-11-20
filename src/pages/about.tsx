import React from 'react'

import * as style from './about.css'

import Layout from '@/components/layout'

const About: React.FC = () => (
  <Layout>
    <article>
      <h1 className={style.heading}>このブログについて</h1>
    </article>
  </Layout>
)

export default About
