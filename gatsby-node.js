/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.onCreateWebpackConfig = ({ actions, loaders, stage }) => {
  let devAliasesOrEmptyObj = {}

  if (!process.env.CI) {
    // TODO: only do this on local development. Source: https://github.com/facebook/react/issues/13991#issuecomment-435587809
    const PEER_DEPENDENCIES = require('./node_modules/@klickmarketing/react-components/package.json')
      .peerDependencies

    // NOTE: we don't wanna do this for many packages though... need a better solution long-term.
    const devAliases = Object.keys(PEER_DEPENDENCIES).reduce((acc, current) => {
      return {
        ...acc,
        [current]: path.resolve(`./node_modules/${current}`),
      }
    }, {})

    devAliasesOrEmptyObj = devAliases
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        // 'lodash-es': 'lodash',
        ...devAliasesOrEmptyObj,
      },
    },
  })
}
