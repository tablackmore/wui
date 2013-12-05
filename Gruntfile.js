module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {},
            jsdist: {
                src: ['src/js/wui.js',
                    'src/js/wui.controls.js',
                    'src/js/wui.controls.control.js',
                    'src/js/wui.controls.app.js',
                    'src/js/wui.controls.buttons.js',
                    'src/js/wui.controls.buttons.standard.js',
                    'src/js/wui.controls.buttons.add.js',
                    'src/js/wui.controls.buttons.back.js',
                    'src/js/wui.controls.buttons.greenLamp.js',
                    'src/js/wui.controls.buttons.greyLamp.js',
                    'src/js/wui.controls.buttons.orangeLamp.js',
                    'src/js/wui.controls.buttons.red.js',
                    'src/js/wui.controls.buttons.redLamp.js',
                    'src/js/wui.controls.lists.js',
                    'src/js/wui.controls.lists.items.js',
                    'src/js/wui.controls.lists.items.standard.js',
                    'src/js/wui.controls.lists.items.arrow.js',
                    'src/js/wui.controls.lists.standard.js',
                    'src/js/wui.controls.lists.rounded.js',
                    'src/js/wui.controls.menu.js',
                    'src/js/wui.controls.menu.menuBar.js',
                    'src/js/wui.controls.menu.menuItem.js',
                    'src/js/wui.controls.panels.js',
                    'src/js/wui.controls.panels.iscroll.js',
                    'src/js/wui.controls.panels.scroll.js',
                    'src/js/wui.controls.panels.standard.js',
                    'src/js/wui.controls.progress.js',
                    'src/js/wui.controls.titleBar.js',
                    'src/js/wui.controls.toolBar.js',
                    'src/js/wui.misc.js'
                ],
                dest: 'dist/js/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        sass: { // Task
            sassdist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'dist/css/<%= pkg.name %>-<%= pkg.version %>.css': 'src/scss/wui.scss'
                }
            }
        },
        uglify: {
            jsdist: {
                files: {
                    'dist/js/<%= pkg.name %>-<%= pkg.version %>.min.js': ['dist/js/<%= pkg.name %>-<%= pkg.version %>.js']
                }
            }
        },
        cssmin: {
            cssdist: {
                files: {
                    'dist/css/<%= pkg.name %>-<%= pkg.version %>.min.css': ['dist/css/<%= pkg.name %>-<%= pkg.version %>.css']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // Default task.
    grunt.registerTask('default', ['concat:jsdist', 'uglify:jsdist', 'sass:sassdist', 'cssmin:cssdist']);
};