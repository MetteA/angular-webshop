var gulp = require("gulp"),
	minifyCSS = require('gulp-minify-css');
	browserSync = require('browser-sync');

//Minimerer css filer
gulp.task('minify-css', function(){
	return gulp.src('Angular-Webshop/css/*.css')
	.pipe(minifyCSS({keepBreaks:true}))
	.pipe(gulp.dest('Angular-Webshop/css/min-css'))
});

//synkroniserer browseren Firefox
gulp.task('browser-sync', function(){
	var config = {
		server: {
			baseDir: './Angular-Webshop/'
		},
		browser: ["firefox"]
	}
	browserSync(config);
});

//holder øje med æmndringer i html og js filer, og køre derefter tarsken browser-sync
gulp.task("watch", function(){
	gulp.watch([
			"./Angular-Webshop/**/*.html", 
			'./Angular-Webshop/**/*.js',
			'./Angular-Webshop/**/*.css'
		], 
		["minify-css", "browser-sync", browserSync.reload]);
});

//Default: køre alle de tasks i array'et på en gang
gulp.task("default", ['minify-css', 'browser-sync', 'watch']);


