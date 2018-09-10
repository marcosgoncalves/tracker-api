var gulp = require('gulp'),
	connect = require('gulp-connect'),
	watch = require('gulp-watch');

gulp.task('logar', function () {
	console.log('logar');
});

gulp.task('serve', function () {
	connect.server({
		root: 'app',
		host: '0.0.0.0',
		port: 42125
	});
});

gulp.task('wcomps', function () {
	return watch('../comps/src/**', { ignoreInitial: false })
		.pipe(gulp.dest('app/assets-bower/comps/src'));
});

//gulp.task('default', gulp.series('serve'));