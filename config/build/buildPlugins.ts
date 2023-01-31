import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins ({
  paths,
  analyze,
  isDev
}: BuildOptions): webpack.WebpackPluginInstance[] {

  const plugins =  [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
  ].filter(Boolean)

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    analyze && plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}
