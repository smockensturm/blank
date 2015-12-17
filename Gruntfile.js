module.exports = function(grunt) {
	grunt.initConfig({

    sass: {
      options: {
        sourceMap: false,
        precision: 4,
        outputStyle: 'compact'
			},
	    dist: {
	      files:{
		      'css/blank.css': ['css/sass/style.scss']
		    }
			}
		},

		uglify: {
			options: {
				mangle: false, // {except: ['jQuery']}
				beautify: true
    	},
			scripts: {
				files: {
					'js/blank.js': ['js/lib/*.js']
        }
    	}
  	},

		autoprefixer: {
      dist: {
          files: {
              'css/blank.css': ['css/blank.css']
          }
      }
    },

		watch:{
			styles:{
				files: ['css/sass/*.scss'],
				tasks: ['sass','autoprefixer']
    	},
  		scripts:{
    		files: ['js/lib/*.js'],
    		tasks: ['uglify']
  		}
		}
	});

	grunt.registerTask('default', ['modernizr', 'sass', 'autoprefixer', 'uglify', 'watch']);
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

}
