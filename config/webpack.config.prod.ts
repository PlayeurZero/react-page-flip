import * as path from 'path'
import * as webpack from 'webpack'
import * as CleanWebpackPlugin from 'clean-webpack-plugin'
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import * as BundleAnalyzerPlugin from 'webpack-bundle-analyzer'

import { default as baseConfig, PROJECT_DIRECTORY, SRC_DIRECTORY, DIST_DIRECTORY } from './webpack.config.base'

const prodConfig = (env): webpack.Configuration => {
  const config = baseConfig(env)

  config.devtool = void(0)

  if (!config.plugins) { config.plugins = [] }

  config.plugins.push(
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
      reportFilename: 'bundle-report.log.html',
      openAnalyzer: false,
    }),
  )

  return config
}

export { prodConfig as default }
