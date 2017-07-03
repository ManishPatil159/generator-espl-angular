'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awesome ' + chalk.red('generator-espl-angular') + ' generator!'
    ));

    // const prompts = [{
    //   type: 'confirm',
    //   name: 'someAnswer',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];

    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // });
  }

  writing() {

    var data = {
      ENV_CONFIG: '<%= ENV_CONFIG %>'
    };

    // Copy all non-dotfiles
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationRoot("public/"),
      data
    );

    // Copy all dotfiles
    this.fs.copy(
      this.templatePath('.*'),
      this.destinationRoot("public/")
    );

  }

  install() {
    //this.installDependencies();
  }
};
