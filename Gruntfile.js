"use strict";
module.exports = function(grunt) {
  require("time-grunt")(grunt);

   //loading plugins
  grunt.loadNpmTasks("grunt-shell");

  //plugins config
  grunt.initConfig({
    devDir: "dev",
    productionDir: "dist",

    shell: {
      engineStartDev: {
        command: function () {
          return "serve <%= devDir %> -C";
        }
      }
    }

  });

  //register tasks
  grunt.registerTask("engine:dev:start", ["shell:engineStartDev"]);

  grunt.event.on("watch", function(action, filepath, target) {
    grunt.log.writeln(target + ": " + filepath + " has " + action);
  });
};
