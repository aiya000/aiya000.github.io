import * as React from 'react'
import { type HeadFC } from 'gatsby'

const IndexPage = () => (
  <div>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  </div>
)

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
