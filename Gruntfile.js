"use strict";
module.exports = function(grunt) {
  //loading plugins
  require("time-grunt")(grunt);
  require("load-grunt-tasks")(grunt);

  //plugins config
  grunt.initConfig({
    devDir: "dev",
    productionDir: "dist",

    shell: {
      engineStartDev: {
        command: function () {
          return "serve <%= devDir %> -C  & grunt watch";
        }
      },
      engineStartProduction: {
        command: function () {
          return "serve <%= productionDir %> -C";
        }
      }
    },
    open : {
      dev : {
        path: "http://localhost:3000/test",
        app: "Google Chrome"
      }
    },
    concurrent: {
        target1: ["engine:dev:start"],
        target2: ["open:dev"]
    },
    concat: {
      production: {
        src: ["<%= devDir %>/js/*.js",
              "<%= devDir %>/js/controllers/*.js"],
        dest: "<%= productionDir %>/js/monsterapp.js"
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      production: {
        files: {
          "<%= productionDir %>/js/monsterapp.min.js": ["<%= productionDir %>/js/monsterapp.js"]
        }
      }
    },
    clean: {
      production: {
        src: ["<%= productionDir %>/js/monsterapp.js",
        "<%= productionDir %>/test"]
      }
    },
    copy: {
      index: {
        files: [
          {src: ["<%= devDir %>/index.html"], dest: "<%= productionDir %>/index.html", filter: "isFile"},
          {expand: true, cwd:"<%= devDir %>/views/" , src: ["**"], dest: "<%= productionDir %>/views/"}
        ]
      }
    },
    usemin: {
      html: "<%= productionDir %>/index.html"
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: "dist/",
          src: "**/*.html",
          dest: "dist/"
        }]
      }
    },
    validation: {
      options: {
        reset: true
      },
      files: {
        src: ["<%= productionDir %>/index.html"]
      }
    },
    watch: {
      livereload: {
        options: { livereload: true },
        files: ["<%= devDir %>/**/*"],
      },
    }
  });

  grunt.event.on("watch", function(action, filepath, target) {
    grunt.log.writeln(target + ": " + filepath + " has " + action);
  });

  //registered tasks
  grunt.registerTask("engine:dev:start", ["shell:engineStartDev"]);
  grunt.registerTask("engine:production:start", ["build:production", "shell:engineStartProduction"]);
  grunt.registerTask("test:start", ["concurrent:target1", "concurrent:target2"]);
  grunt.registerTask("validate", ["build:production", "validation"]);
  grunt.registerTask("build:production", [
                                          "concat:production",
                                          "uglify:production",
                                          "clean:production",
                                          "copy:index",
                                          "usemin",
                                          "htmlmin",
                                          "validation"]);
};
