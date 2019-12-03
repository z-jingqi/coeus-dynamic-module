const gulp = require('gulp')
const childProcess = require('child_process');

function buildModule(cb) {
    const name = getModuleName();
    const command = `npm run build ${name}`;
    console.log(`building ${name}`);
    childProcess.execSync(command, {
        cwd: './'
    });
    console.log(`${name} building complete`);
    cb();
}

function copyModuleResource() {
    const name = getModuleName();
    return gulp.src(`./dist/${name}/bundles/${name}.umd.min.js`)
        .pipe(gulp.dest(`./src/assets/modules/${name}/`))
}

function getModuleName() {
    const args = process.argv;
    const nameArg = args.find(arg => arg.indexOf('--name=') > -1);
    if (nameArg) {
        return nameArg.split('=')[1];
    } else {
        throw new Error('missing target module\'s name');
    }
}

exports.buildModule = gulp.series(buildModule, copyModuleResource);