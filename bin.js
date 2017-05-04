const {execSync} = require('child_process')

const argv = process.argv.slice(0, 2)

console.log(argv)


//
// // clean
// execSync(`rm -f -r ${this.dirs.ts}/`, {stdio: 'inherit'})
//
// // copy js dir to typescript dir
// execSync(`cp -R -f ${this.dirs.js} ${this.dirs.ts}/`, {stdio: 'inherit'})
//
// const tsdir = `cd ${dirs.ts}`
// const rename = `for f in *.js; do mv $f `basename $f .js`.ts; done;for f in *.js; do mv $f `basename $f .js`.ts; done;`

// const Magic = require('./Magic')

// const dirs = {
//   dir: process.cwd(),
//   js: argv[0],
//   ts: argv[1],
// }
//
// const magic = new Magic()
//
// magic
//   .debug(true)
//   .setDirs(dirs)
//   .toTypeScript()
//   .gatherFiles()
//   .lebab()
//   .saveTypeScript()
