import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import runSequence from 'run-sequence'
import webpack from 'webpack'
import webpackConfig from './webpack.config'
import webpackTestConfig from './webpack.test.config'

const paths = {
  sass: './sass/**/**.*',
  app: './app/**/**.*',
  test: './test/**.js',
  css: './public/css/**.*',
  js: './public/js/**.*'
}

gulp.task('nodemon', ()=>{
  plugins().nodemon({
    script: 'server.js',
    nodeArgs: ['--debug'],
    ext: 'js,html',
    watch: './**.*'
  })
})

gulp.task('compass', ()=>{
  gulp
    .src(paths.sass)
    .pipe(plugins().compass({
      config_file: './config.rb'
    }))
    .pipe(gulp.dest('./public/css'))
    .on('error', (err)=>{
      console.log(err)
      this.emit('end')
    })
})

gulp.task('watch', ()=>{
  plugins().livereload.listen()

  gulp.watch(paths.app, ['webpack'])
  gulp.watch(paths.sass, ['compass'])

  gulp.watch(paths.test, ['webpack.test'])

  gulp.watch([paths.css, paths.js]).on('change', plugins().livereload.changed)
})

gulp.task('webpack', (callback)=>{
  webpack(webpackConfig, (err, stats)=>{
    if (err)
      console.log(err)
    callback()
  })
})

gulp.task('test', (done)=>{
  runSequence('webpack.test', ['watch'], done)
})

gulp.task('webpack.test', (callback)=>{
  webpack(webpackTestConfig, (err, stats)=>{
    if (err)
      console.log(err)
    callback()
  })
})

gulp.task('compile', (done)=>{
  runSequence(['compass', 'webpack'], done)
})

gulp.task('default', (done)=>{
  runSequence('compile', ['nodemon', 'watch'], done)
})