import path from 'path'
import webpack from 'webpack'
const { networkInterfaces } = require('os')

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'

function getLocalIpAdress(): string {
  const nets = networkInterfaces()
  const results = Object.create(null)

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
      if (net.family === familyV4Value && !net.internal) {
        if (!results[name]) {
            results[name] = []
        }
        results[name].push(net.address);
      }
    }
  }

  return results["Ethernet"][0]
}

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const localIP = getLocalIpAdress()  

  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const apiUrl = env.apiUrl || `http://${localIP}:8000`
  const analyze = env.analyze || false
  
  const isDev = mode === 'development'

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    apiUrl,
    analyze,
    port: PORT,
    project: 'frontend'
  })

  return config
}
