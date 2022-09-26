import { ResolveOptions } from 'webpack';

export function builadResolvers(): ResolveOptions {
  return { extensions: ['.tsx', '.ts', '.js'] };
}
