var gulp = require("gulp");
var ts = require("gulp-typescript");
var tslint = require('gulp-tslint');
var sourcemaps = require('gulp-sourcemaps');
var exec = require('child_process').exec;

var tsProject = ts.createProject("tsconfig.json");

function ts_lint() {
	return gulp.src(['./**/*.ts', '!./**/*.d.ts', '!./node_modules/**/*'])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report());
}

function ts_compile() {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: './' }))
        .pipe(gulp.dest(tsProject.options.outDir));
}

var ts = gulp.parallel(ts_lint, ts_compile);

function ng(done) {
    child = exec('./node_modules/.bin/ng build');

    child.stdout.on('data', data => {
        console.log(data);
    });

    child.stderr.on('data', data => {
        console.error(data);
    });

    child.on('close', code => {
        done();
    });
}

function ng_watch(done) {
    child = exec('./node_modules/.bin/ng build --watch');

    child.stdout.on('data', data => {
        console.log(data);
    });

    child.stderr.on('data', data => {
        console.error(data);
    });

    child.on('close', code => {
        console.log("ng watch closed with " + code);
    });

    done();
}

exports.watch = gulp.series(ts, ng_watch, () => {
    // Watch all typescript files, except for those in frontend (those are watched by ng_watch)
    gulp.watch(['./**/*.ts', '!./node_modules/**/*', '!./frontend/**/*'], ts);  
});

exports.build = gulp.series(ts, ng);
exports.default = exports.build;