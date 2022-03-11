import { createFilter, FilterPattern } from '@rollup/pluginutils'
import { minify } from 'html-minifier'

export default function pluginKnockout(options: VitePluginKnockout = {}) {
  if (!options.include) {
    options.include = '**/*.html'
  }

  if (!options.exclude) {
    options.exclude = 'index.html'
  }

  const htmlFilter = createFilter(options.include, options.exclude)
  const tsFilter = createFilter('**/*.ts')

  return {
    name: 'vite:knockout',
    transform(code: string, id: string) {
      if (tsFilter(id)) {
        // this rewrites the code so we can tell rollup not to process html files
        return {
          code: code.replace(/\.html"/, '.html?raw"'),
          map: null
        }
      }

      if (htmlFilter(id)) {
        return {
          code: `export default ${JSON.stringify(minify(code))}`,
          map: null
        }
      }
    }
  }
}

interface VitePluginKnockout {
  include?: FilterPattern
  exclude?: FilterPattern
}