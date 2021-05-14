const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack(config, { isServer, mode }) {
    // Use preact in production for smaller bundles
    if (!isServer && mode === 'production') {
      config.resolve.alias = config.resolve.alias || {}
      config.resolve.alias.react = 'preact/compat'
      config.resolve.alias['react-dom'] = 'preact/compat'
    }

    if (isServer) {
      config.externals = config.externals || {}
      config.externals.encoding = 'commonjs encoding'
      config.externals._http_common = 'commonjs _http_common'
    }

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.plugins.push(new Dotenv())

    return config
  },
}
