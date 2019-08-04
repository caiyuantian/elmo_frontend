module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: "./public",
            src: ["**"],
            dest: "./dist/public"
          }
        ]
      }
    },
    ts: {
      app: {
        files: [{
          src: ["src/**/*.tsx", "!src/.baseDir.tsx"],
          dest: "./dist"
        }],
        options: {
          module: "commonjs",
          target: "es5",
          sourceMap: false,
          rootDir: "src"
        }
      },
      options: {
        jsx: 'react'
      }
    },
    watch: {
      ts: {
        files: ["src/**/*.tsx"],
        tasks: ["ts"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");

  grunt.registerTask("default", [
    "copy",
    "ts"
  ]);

};
