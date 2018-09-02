module.exports = function(grunt){

    grunt.initConfig({

        protractor: {
            options:{
                webdriverManagerUpdate: true,
                configFile:"tests/config.js",
                noColor: false
            },
            allTests:{
                options:{
                    keepAlive: false
                }
            },
            e2eTests:{
                options:{
                    keepAlive: true,
                    args:{suite: "endtoend"}
                }
            },
            apiTests:{
                options:{
                    keepAlive: true,
                    args:{suite: "api"}
                }
            },
        },

        run:{
            installDependencies:{
                exec: 'npm install'
            },
            startServer:{
                exec: 'npm start'
            },
            seedLocalDb_windows:{
                exec: 'set NODE_ENV=localDb&&seed'
            },
            seedLocalDb:{
                exec: 'export NODE_ENV=localDb && seed'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('seedLocalDb',['run:seedLocalDb']);
    grunt.registerTask('seedLocalDb_windows',['run:seedLocalDb_windows']);

    grunt.registerTask('setup', ['run:installDependencies', 'run:startServer']);

    grunt.registerTask('default',['protractor:allTests']);
    grunt.registerTask('e2eTests',['protractor:e2eTests']);
    grunt.registerTask('apiTests',['protractor:apiTests']);
};
