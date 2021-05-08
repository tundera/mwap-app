const path = require('path')

const getJsTsRules = require('mwap/lib/utils/get-jsts-rules')
const getStyleRules = require('mwap/lib/utils/get-style-rules')

module.exports = {
  webpack(config, args) {
    // Use preact in production for smaller bundles
    // if (!args.isServer && args.mode === 'production') {
    //   config.resolve.alias = config.resolve.alias || {}
    //   config.resolve.alias.react = 'preact/compat'
    //   config.resolve.alias['react-dom'] = 'preact/compat'
    // }

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
