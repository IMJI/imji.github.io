const { parallel, src, dest } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const uncss = require('gulp-uncss')
const csso = require('gulp-csso')
const browserify = require('gulp-browserify')
const uglify = require('gulp-uglify')

const css = (cb) => {
    src('./css/*css')
        .pipe(uncss({
            html: '*.html'
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(csso())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('./assets/css/'))
    cb()
}

const js = (cb) => {
    src('./index.js')
        .pipe(browserify({
            insertGlobals : true
        }))
        .pipe(rename({ extname: '.bundle.js' }))
        .pipe(dest('./'))
    cb()
}

exports.default = parallel(js, css)