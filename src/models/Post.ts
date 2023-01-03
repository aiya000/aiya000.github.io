import React from 'react'

/**
 * Data to show [[PostPreview]].
 */
export type Post = {
  title: string
  tags: Array<string>
  slug: string
  excerpt: React.ReactNode
}
