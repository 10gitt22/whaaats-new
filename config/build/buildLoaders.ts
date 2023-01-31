import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = buildSvgLoader()

  const cssLoader = buildCssLoader(options.isDev)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: {
      loader: 'file-loader'
    }
  }

  return [fileLoader, svgLoader, typescriptLoader, cssLoader]
}
