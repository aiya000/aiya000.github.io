import React from 'react'

import * as style from './profile.css'

import etaImage from '@/assets/images/eta.png'
import nicoImage from '@/assets/images/me-nico.png'
import meSquareImage from '@/assets/images/me-square.png'
import meTeokureImage from '@/assets/images/me-teokure.png'
import muImage from '@/assets/images/mu.png'
import mu2Image from '@/assets/images/mu2.png'
import Layout from '@/components/layout'

const Profile: React.FC = () => (
  <Layout>
    <article>
      <h1 className={style.h1}>筆者のプロフィール</h1>
      <h2 className={style.h2}>aiya000（あいや）</h2>

      <div className={style.myIcons}>
        <img className={style.myLatestIcon} src={mu2Image} alt="my-latest-logo" />
        <img className={style.myLatestIcon} src={muImage} alt="my-latest-logo" />
        <img className={style.myLatestIcon} src={etaImage} alt="my-latest-logo" />
      </div>
      <div className={style.myIcons}>
        <img className={style.myOlderIcon} src={nicoImage} alt="my-older-logo" />
        <img className={style.myOlderIcon} src={meTeokureImage} alt="my-older-logo" />
        <img className={style.myOlderIcon} src={meSquareImage} alt="my-older-logo" />
      </div>

      <div className={style.text}>
        <p>
          「<a href="https://aiya000.booth.pm/items/1298622">せつラボ 〜圏論の基本〜</a>」「
          <a href="https://aiya000.booth.pm/items/1040121">矢澤にこ先輩といっしょに代数！</a>
          」著者。
        </p>
        <p>強い静的型付けとテストを用いて、バグを防ぐのが好き。</p>
      </div>

      <ul>
        <li>
          強み
          <ul>
            <li>強い静的型付け（強い静的型付き言語）</li>
            <li>興味のある技術の最新動向を追うこと</li>
            <li>文章書き（本の執筆・ドキュメンテーション・ブログ記事・その他）</li>
            <li>
              カンファレンスでの発表
              <ul>
                <li>VimConf</li>
                <li>Haskell Day</li>
                <li>etc</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/aiya000">詳細</a>
          <ul>
            <li>
              <a href="https://github.com/aiya000/Curriculum-Vitae/blob/master/README.md#プログラミング言語非チューリング完全含む">
                プログラミング言語スキル
              </a>
            </li>
            <li>
              <a href="https://github.com/aiya000/Curriculum-Vitae/blob/master/README.md#強み技能特定のフレームワークによらない">
                強み・技能
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  </Layout>
)

export default Profile
