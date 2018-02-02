import * as path from 'path'
import * as webpack from 'webpack'
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import * as BundleAnalyzerPlugin from 'webpack-bundle-analyzer'

import config, { PROJECT_DIRECTORY, SRC_DIRECTORY, DIST_DIRECTORY } from './webpack.config.base'

const prodConfig = (env): webpack.Configuration => {
  const tmpConfig = config(env)

  tmpConfig.devtool = void 0

  if (!tmpConfig.plugins) { tmpConfig.plugins = [] }

  tmpConfig.plugins.push(
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: false,
    }),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'webpack-bundle-report.html',
      openAnalyzer: false,
    }),
  )

  return tmpConfig
}

export { prodConfig as default }
