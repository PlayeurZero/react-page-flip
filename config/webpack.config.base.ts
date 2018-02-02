import * as path from 'path'
import * as webpack from 'webpack'
import * as CleanWebpackPlugin from 'clean-webpack-plugin'
import * as CopyWebpackPlugin from 'copy-webpack-plugin'
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin'

const PROJECT_DIRECTORY = path.resolve(__dirname, '..')
const SRC_DIRECTORY = path.resolve(PROJECT_DIRECTORY, 'src')
const DIST_DIRECTORY = path.resolve(PROJECT_DIRECTORY, 'dist')

const config = (env): webpack.Configuration => ({
  entry: [path.resolve(SRC_DIRECTORY, 'index.tsx')],
  output: {
    path: path.resolve(DIST_DIRECTORY),
    filename: 'bundle.js',
    publicPath: '/',
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(PROJECT_DIRECTORY, 'config', 'tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          'raw-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new webpack.EnvironmentPlugin(env),
    new CleanWebpackPlugin([path.parse(DIST_DIRECTORY).name],
      {
        dry: false,
        root: PROJECT_DIRECTORY,
        verbose: false,
      },
    ),
  ],
})

export { config as default, PROJECT_DIRECTORY, SRC_DIRECTORY, DIST_DIRECTORY }
