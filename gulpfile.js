const { parallel, src, dest, watch } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const uncss = require('gulp-uncss')
const csso = require('gulp-csso')
const browserify = require('gulp-browserify')

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
    src('./src/*.js')
        .pipe(browserify({
            transform: ['babelify'],
        }))
        .pipe(rename({ extname: '.bundle.js' }))
        .pipe(dest('./'))
    cb()
}

exports.default = parallel(js, css)
exports.watch = () => {
    watch(['./src/*.js', './src/*/*/js'], (cb) => {
        src('./src/*.js')
            .pipe(browserify({
                transform: ['babelify'],
            }))
            .pipe(rename({ extname: '.bundle.js' }))
            .pipe(dest('./'))
        cb()
    })
    
    watch(['./css/*.css'], (cb) => {
        src('./css/*.css')
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
    })
}