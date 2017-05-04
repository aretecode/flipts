const {FuseBox} = require('fuse-box')
const LebabPlugin = require('./LebabPlugin')
const TypeScriptPlugin = require('./TypeScriptPlugin')

FuseBox
  .init({
    plugins: [
      [
        new LebabPlugin({dir: __dirname, debug: true}),
        new TypeScriptPlugin({dir: __dirname, debug: true}),
      ],
    ],
    homeDir: __dirname,
    outFile: `test/output/fused.js`,
  })
  .bundle('> test/index.js')
