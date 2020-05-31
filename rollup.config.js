import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

import packageJSON from './package.json'
const input = './src/index.js'
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js')

export default [
  // ES
  {
    input,
    output: {
      file: packageJSON.main,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      resolve(),
      commonjs(),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: 'es',
      exports: 'named',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
]
