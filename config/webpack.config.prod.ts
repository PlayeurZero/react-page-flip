import * as path from 'path'
import * as webpack from 'webpack'
import * as CleanWebpackPlugin from 'clean-webpack-plugin'
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import * as BundleAnalyzerPlugin from 'webpack-bundle-analyzer'

import config, { PROJECT_DIRECTORY, SRC_DIRECTORY, DIST_DIRECTORY } from './webpack.config.base'

const prodConfig = (env): webpack.Configuration => {
  const tmpConfig = config(env)

  tmpConfig.devtool = void 0

  if (!tmpConfig.plugins) { tmpConfig.plugins = [] }

  tmpConfig.plugins.push(
    new CleanWebpackPlugin(
      [path.parse(DIST_DIRECTORY).name],
      {
        dry: false,
        root: PROJECT_DIRECTORY,
        verbose: false,
      },
    ),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: false,
    }),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle-report.html',
      openAnalyzer: false,
    }),
  )

  return tmpConfig
}

export { prodConfig as default }
