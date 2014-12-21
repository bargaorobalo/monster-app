monster-app
===========
Interface to get server performance metrics

##Requirements
* [nodeJS](http://nodejs.org/)
* [Bower](http://bower.io/)
* $ npm install -g serve (This dependency needs to be a global)

##How to install

Clone the repository to your environment:
    git clone https://github.com/bargaorobalo/challenge-javascript.git

Install all npm depencencies:
    npm install


## Build and run the distribution version
    grunt engine:production:start

### Verifiy W3C HTML5 Validation
This task generates a validation-report.json to check for the errors
    grunt validate


## Tasks runner
For a fast development, here goes a few shortcut to automatized tasks. This is a time killer feature. Run it on Command Line Interface

### Running the development env
    grunt engine:dev:start

### Running the Spec Runner
    grunt test:start

### Seeing the documentation
    grunt generate:documentation


Plus: If you open the `Gruntfile.js` file, you'll find wonders and more useful tasks.

