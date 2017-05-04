const {resolve} = require('path')
const log = require('fliplog')
const lebab = require('lebab')
const {read, write} = require('flipfile')
const {GlobSync} = require('flipfile/glob')

const dir = __dirname

// for f in *.js; do mv $f `basename $f .js`.ts; done;

function globd(pattern) {
  const g = new GlobSync(pattern, {stat: true, absolute: true})
  return g.found.map(abs => {
    return {abs, contents: read(abs)}
  })
}


function lebabs({abs, contents}) {
  log
    .blue('data')
    .verbose()
    .data({abs, contents})
    .echo()


  const features = ['let', 'arrow', 'commonjs', 'includes']
  const {code, warnings} = lebab.transform(contents, features)

  log
    .bold('transform')
    .verbose()
    .data({code, warnings})
    .echo()

  contents = code
  return {contents, abs}
}

function rewrite({abs, contents}) {
  const ts = resolve(dir, './ts')
  const rel = abs.replace('.js', '.ts').replace(dir, './').replace('//', '/')
  const remapped = resolve(ts, rel)

  log
    .yellow('writing')
    .verbose()
    .data({ts, remapped, abs, contents, rel})
    .echo()

  write(remapped, contents)
}


const found = globd('test/**/*.js')
const transformed = found.map(file => lebabs(file))
const rewritten = transformed.map(file => rewrite(file))
