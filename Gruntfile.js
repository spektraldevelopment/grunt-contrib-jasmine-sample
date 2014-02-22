module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            pivotal: {
                src: 'src/NodeMaker.js',
                options: {
                    specs: 'spec/NodeMakerSpec.js',
                    helpers: 'spec/Helper.js',
                    outfile: 'SpecRunner.html',
                    keepRunner: true
                }
            }
        },
        watch: {
            pivotal : {
                files: ['src/*.js', 'specs/*.js'],
                tasks: 'jasmine:pivotal:build'
            }
        }
    });

    // Load the plugin that provides the "jasmine" task.
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    //Load the plugin that provides the "watch" task
    grunt.loadNpmTasks('grunt-contrib-watch');

};