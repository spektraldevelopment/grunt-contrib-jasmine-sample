module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
	    pivotal: {
	      src: 'src/NodeMaker.js',
	      options: {
	        specs: 'spec/NodeMakerSpec.js',
            helpers: 'spec/Helper.js'
	      }
	    }
	  }
  });

  // Load the plugin that provides the "jasmine" task.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

};