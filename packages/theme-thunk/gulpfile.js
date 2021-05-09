
var gulp = require('gulp'),
sass = require('gulp-sass'),
del = require('del'),
bs = require('browser-sync').create(),
plumber = require('gulp-plumber'),
proxy = [],
postcssOption = [];
var config = {
    livereload: true,
    reversion: true,
    seajs: true,
    supportREM:false,
    lazyDir: ['../slice']
};
var paths = {
    'src': {
        'dir': './src/',
        'img': './src/**/*.{JPG,jpg,png,gif,svg}',
        'slice': './src/**/slice/**/*.png',
        'sass': './src/**/*.scss',
        // 'sass': './src/css/style-*.scss',
        'css': './src/**/*.css',
        'js': ['./src/**/*.js','!./src/js/lib/**/*.js'],
        'media': ['./src/**/media/**/*', './src/**/fonts/**/*', './src/**/*.htc'],
        'html': ['./src/**/*.html', '!./src/_*/**/*.html'],
    },
    'dist': {
        'dir': './dist/',
        'img': './dist/assets/img/',
        'css': './dist/assets/css/',
        'js': './dist/assets/js/',
        'sprite': './dist/assets/sprite',
        'html': './dist/'
    }
}, 
serverConfig = {
    baseDir: paths.dist.html,
    middleware: proxy
};
// 复制操作
// var copyHandler = function(type, file) {
//     file = file || paths['src'][type];
//     return gulp.src(file, { base: paths.src.dir })
//         .pipe(gulp.dest('./dist/'))
//         .on('end', reloadHandler);
// };
// 自动刷新
var reloadHandler = function() {
    config.livereload && bs.reload();
};
// 清除 dist 目录
function delDist() {
    return del([paths.dist.dir]);
}
// 复制文件操作
// function copyMedia() {
//     return copyHandler('media');
// }
/**
 * [imageminImg 图片压缩]
 * @return {[type]} [description]
 */
 function imageminImg() {
    // var destTarget = file ? path.dirname(file).replace('src', 'dist') : paths.dist.dir;
    return gulp.src(`./src/images/*.*`)
        .pipe(plumber())
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images/'))
        .on('end', reloadHandler);;
}
function imgImgs(){
   return gulp.src(`./src/images/*.*`)
          .pipe(imagemin())
          .pipe(gulp.dest('./dist/images'))
          .on('end', reloadHandler);
}
/**
 * [compileSass 编译sass及合并Sprite]
 * @return {[type]} [description]
 */
 function compileSass() {
    return gulp.src('./src/**/*.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'expanded' //compact expanded
        }))
        .pipe(gulp.dest('dist/'))
        .on('end', reloadHandler);
}
/**
 * [compileAutoprefixer 自动补全]
 * @return {[type]} [description]
 */
 function compileAutoprefixer(cb, file) {
    var destTarget = file ? path.dirname(file).replace('src', 'dist') : paths.dist.dir;
    return gulp.src(file || './dist/**/*.css')
        .pipe(plumber())
        .pipe(postcss(postcssOption))
        .pipe(gulp.dest(destTarget)).on('end', reloadHandler);
}

function iconFont(cb, file){
    var destTarget = file ? path.dirname(file).replace('src', 'dist') : paths.dist.html;
    return gulp.src('./src/fonts')
    .pipe(gulp.dest('dist/'))
    .on('end', reloadHandler);;
}
//启动 livereload
// function startServer(cb) {
//     bs.init({
//         server: serverConfig,
//         port: config['livereload']['port'] || 8089,
//         // startPath: config['livereload']['startPath'] || '/',
//         open:false,
//         reloadDelay: 0,
//         directory: true,
//         notify: { //自定制livereload 提醒条
//             styles: [
//                 "margin: 0",
//                 "padding: 5px",
//                 "position: fixed",
//                 "font-size: 10px",
//                 "z-index: 9999",
//                 "bottom: 0px",
//                 "right: 0px",
//                 "border-radius: 0",
//                 "border-top-left-radius: 5px",
//                 "background-color: rgba(60,197,31,0.5)",
//                 "color: white",
//                 "text-align: center"
//             ]
//         }
//     });
//     cb();
// }
gulp.task('default', gulp.series(
    delDist,
    gulp.parallel(
        compileSass,
        // imageminImg,
        // compileCss,
        // copyMedia,
        iconFont,
        // imgImgs
    ),
    // compileAutoprefixer,
    // startServer
));
gulp.task('delDist', gulp.series(delDist));