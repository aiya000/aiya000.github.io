import { HeadFC } from 'gatsby'
import React from 'react'

import * as style from './about.css'

import meSquareImage from '@/assets/images/me-square.png'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'

const About: React.FC = () => (
  <Layout>
    <article>
      <h1 className={style.h1}>このブログについて</h1>
      <img alt="my-logo" src={meSquareImage} className={style.myLogo} />
      <p>技術記事・イベントの参加記事・日記や私的な備考録など、雑多な記事を書いています。</p>
      <p>雑多だったり実験的な記事が多めなのは許してね！</p>
      <p>記事中のコードについては、コンパイルで検証するように心がけています。</p>
      <ul>
        <li>
          <p>
            {/* TODO: block highlightする */}
            ETHの寄付: <code>0xC9CF428EBCf542aC202F13DE3b25D39c7eE4d1e4</code>
          </p>
        </li>
      </ul>
    </article>
  </Layout>
)

export default About

export const Head: HeadFC = () => <Seo routeName="About" />
