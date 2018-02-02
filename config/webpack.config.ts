import devConfig from './webpack.config.dev'
import prodConfig from './webpack.config.prod'

export default (env) => env.NODE_ENV === 'production' ? prodConfig(env) : devConfig(env)
