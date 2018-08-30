import * as path from 'path'
import * as webpack from 'webpack'

import { default as baseConfig, PROJECT_DIRECTORY, SRC_DIRECTORY, DIST_DIRECTORY } from './webpack.config.base'

const devConfig = (env): webpack.Configuration => {
  const config = baseConfig(env)

  config.devtool = 'eval-source-map'

  config.devServer = {
    contentBase: DIST_DIRECTORY,
    https: false,
  }

  if (!config.plugins) { config.plugins = [] }

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
  )

  return config
}

export { devConfig as default }
