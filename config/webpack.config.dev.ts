import * as path from 'path'
import * as webpack from 'webpack'

import config, { PROJECT_DIRECTORY, SRC_DIRECTORY, DIST_DIRECTORY } from './webpack.config.base'

const devConfig = (env): webpack.Configuration => {
  const tmpConfig = config(env)

  tmpConfig.devtool = 'eval-source-map'

  tmpConfig.devServer = {
    contentBase: DIST_DIRECTORY,
    https: false,
  }

  if (!tmpConfig.plugins) { tmpConfig.plugins = [] }

  tmpConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
  )

  return tmpConfig
}

export { devConfig as default }
