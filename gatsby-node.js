const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': __dirname,
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
