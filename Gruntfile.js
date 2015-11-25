/*jshint camelcase: false*/

module.exports = function (grunt) {
    'use strict';

    // load all grunt tasks
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        postcss: {
            options: {
                map: false, // inline sourcemaps
                processors: [
                    require('autoprefixer-core')() // add vendor prefixes
                    // require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'css/style.css'
            }
        },
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5, // maximum number of notifications from jshint output // defaults to the name in package.json, or will use project directory's name
                success: true, // whether successful grunt executions should be notified automatically
                duration: 3 // the duration of notification in seconds, for `notify-send only
            }
        },
        less: {
            style: {
                files: {
                    'css/style.css': 'less/style.less'
                }
            }
        },
        watch: {
            css: {
                files: ['less/*.less'],
                tasks: ['less:style','postcss:dist'],
                options: {
                    livereload: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.registerTask('watch', [ 'watch' ]);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-jsdoc');

    // This is required if you use any options.
    grunt.task.run('notify_hooks');


};
