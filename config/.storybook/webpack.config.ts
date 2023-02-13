import path from 'path'
import webpack, { DefinePlugin } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

export default ({config}: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '', 
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }


  config.plugins?.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true)
  }))
 
  config.resolve?.modules?.unshift(paths.src)

  config.resolve?.extensions?.push('.ts', '.tsx')

  config.module?.rules?.push(buildCssLoader(true))  

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true
  }))

  const fileLoaderRule: any = config.module?.rules?.find(
    (rule: any) => rule.test && rule.test.test(".svg")
  );
  fileLoaderRule.exclude = /\.svg$/;

  config.module?.rules?.push({
      test: /\.svg$/,
      loader: path.resolve(__dirname, '..', '..', 'node_modules', "@svgr/webpack")
  });

  return config
}