const {resolve} = require('path')
const fsbx = require('fuse-box')
const {read, write} = require('flipfile')

// http://stackoverflow.com/questions/14412164/is-there-a-tool-to-convert-javascript-files-to-typescript
// http://stackoverflow.com/questions/37234999/git-rename-all-javascript-to-typescript
// https://github.com/markogresak/js-to-tsx/blob/master/rename-to-tsx
class JavaScriptToTypeScriptPlugin {
  constructor(options) {
    this.test = /.js$/
    this.dir = options.dir
    this.debug = options.debug
    this.babelPlugin = options.babelPlugin
  }

  init(context) {
    if (this.debug)
      console.debug('initted')
    this.context = context
  }

  transform(file) {
    // this.babelPlugin.transform(file)

    const remapped = `./ts/${file.info.fuseBoxPath.replace('.js', '.ts')}`
    const abs = resolve(this.dir, remapped)
    const contents = read(file.info.fuseBoxPath)
    write(abs, contents)
  }
}

module.exports = JavaScriptToTypeScriptPlugin
