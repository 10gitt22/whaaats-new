import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfigutation } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfigutation {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
}
