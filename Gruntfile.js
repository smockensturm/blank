module.exports = function(grunt) {
	grunt.initConfig({
    	sass:{
        	options:{
        	    sourceMap: false,
        	    precision: 4,
        	    outputStyle: 'compact'
			},
	        dist:{
	            files:{
		            'css/flint.css': ['css/sass/style.scss']
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
					'js/flint.js': ['js/lib/*.js']
        		}
    		}
  		},

		autoprefixer: {
            dist: {
                files: {
                    'css/flint.css': ['css/blank.css']
                }
            }
        },

		svg_sprite: {
			icons: {
			    expand      : true,
			    cwd         : 'assets/svg',
			    src         : ['*.svg'],
			    dest        : 'assets',
				options		: {
	                mode                : {
						inline              : true,
	                    symbol          : true,
						css                 : {
				            render          : {
				                scss        : true
				            }
				        }
	                }
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
    		},
			icon:{
				files: ['assets/svg/*.svg'],
				tasks: ['svg_sprite']
			}
  		}

	});

	grunt.registerTask('default', ['sass', 'autoprefixer', 'uglify', 'watch', 'svg_sprite']);
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-svg-sprite');
}
