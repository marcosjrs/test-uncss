var gulp = require('gulp');
var postcss = require('gulp-postcss');
var uncss = require('postcss-uncss');

gulp.task('limpieza', function () {
    var plugins = [
        uncss({
            html: ['ejemplo_carpeta_publica/*.html']
        }),
    ];
    return gulp.src('./ejemplo_carpeta_publica/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./ejemplo_carpeta_publica/css_limpios'));
});