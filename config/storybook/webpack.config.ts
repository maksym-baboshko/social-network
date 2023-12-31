import path from 'path'
import { DefinePlugin, type Configuration } from 'webpack'

import { type BuildOptions } from '../build/types'
import { buildAlias, buildSVGLoader } from '../build/lib'

export default ({ config }: { config: Configuration }): Configuration => {
  const rootDir = path.resolve(__dirname, '..', '..')

  const options: BuildOptions = {
    paths: {
      src: path.resolve(rootDir, 'src'),
      public: path.resolve(rootDir, '/'),
      dist: path.resolve(rootDir, 'dist'),
      entry: path.resolve(rootDir, 'src', 'main.tsx'),
      html: path.resolve(rootDir, 'public', 'index.html')
    },
    mode: 'development',
    project: 'storybook',
    isDev: true,
    port: 3000,
    apiURL: 'https://stub-api.com'
  }

  const globalConstants = {
    __IS_DEV__: JSON.stringify(options.isDev),
    __API__: JSON.stringify(options.apiURL),
    __PROJECT__: JSON.stringify(options.project)
  }

  if (config.resolve) {
    config.resolve.alias = { ...config.resolve.alias, ...buildAlias(options) }
  }

  if (config.plugins) {
    config.plugins.push(new DefinePlugin(globalConstants))
  }

  if (config.module?.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      if (typeof rule !== 'object') return rule

      if (/svg/.test(rule?.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      } else {
        return rule
      }
    })

    config.module.rules.push(buildSVGLoader())
  }

  return config
}
