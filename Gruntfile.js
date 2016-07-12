module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
  	shell: {
        pythonServer: {
            options: {
                stdout: true
            },
            command: 'python manage.py runserver'
        }
    }
  });
  
  grunt.registerTask('default', ['shell:pythonServer']);

};