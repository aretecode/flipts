const {resolve} = require('path')
const fsbx = require('fuse-box')
const lebab = require('lebab')
const log = require('fliplog')

class LebabPlugin {
  constructor(options) {
    this.test = /.js$/
    this.dir = options.dir
    this.debug = options.debug
  }

  init(context) {
    if (this.debug) log.green('initted').echo()
    this.context = context
  }

  transform(file) {
    file.loadContents()

    // log.quick(file)

    const {code, warnings} = lebab.transform(file.contents, ['let', 'arrow'])

    log
      .bold('transform')
      .verbose()
      .data({code, warnings})
      .echo()

    file.contents = lebab.code
  }
}

module.exports = LebabPlugin
