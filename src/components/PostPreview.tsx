import clsx from 'clsx'
import { Link } from 'gatsby'
import React from 'react'

import * as style from './PostPreview.css'

import clockImage from '@/assets/images/clock.svg'
import tagImage from '@/assets/images/tag-solid.svg'
import { Post } from '@/models/Post'
import { raise } from '@/modules/Error'

export type Props = Post & {
  className: string
}

const PostPreview: React.FC<Props> = ({ title, tags, slug, excerpt, className }) => {
  const postUrl = `/posts/${slug}`
  const date = slug.match(/^\d{4}-\d{2}-\d{2}/)?.[0] ?? raise('.date could not get.')

  const Tags = () => (
    <div className={style.tags}>
      {tags.map((tag) => {
        return (
          <span className={style.tag} key={tag}>
            <img className={style.tagImage} src={tagImage} alt="tag" />
            <Link className={style.tagLink} to={`/tags/${tag}`}>
              {tag}
            </Link>
          </span>
        )
      })}
    </div>
  )

  return (
    <div className={clsx(style.entry, className)}>
      <div className={style.date}>
        <img src={clockImage} alt="clock" className={style.clock} />
        <span className={style.category}>{date}</span>
      </div>

      <h3 className={style.title}>
        <Link to={postUrl}>{title}</Link>
      </h3>
      <Tags />

      <div className={style.excerpt}>{excerpt}</div>
      <div className={style.readMore}>
        <Link to={postUrl}>続きを見る</Link>
      </div>
    </div>
  )
}

export default PostPreview
