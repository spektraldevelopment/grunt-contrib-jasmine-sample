module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
	    pivotal: {
	      src: 'src/FooLib.js',
	      options: {
	        specs: 'spec/FooLibSpec.js'
	      }
	    }
	  }
  });

  // Load the plugin that provides the "jasmine" task.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

};