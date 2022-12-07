import './global.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism-solarizedlight.css'

import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps } from 'prism-react-renderer'

/**
 * https://levelup.gitconnected.com/syntax-highlighting-in-gatsby-mdx-f0187ce51f4f
 */
export const wrapRootElement = ({ element }) => {
  const component = {
    pre: (props) => {
      const className = props.children.props.className ?? ''
      const matches = className.match(/language-(?<lang>.*)/)
      return (
        <Highlight
          {...defaultProps}
          code={props.children.props.children}
          language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )
    },
  }
  return <MDXProvider components={component}>{element}</MDXProvider>
}
