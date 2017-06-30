'use strict';
const Generator = require('yeoman-generator');
const htmlWiring = require("html-wiring");
module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        // This method adds support for a `--dir` flag
        //this.option('dir');
    }
    writing() {

        const componentName = this.options.name || 'myComponent';
        //const dir = this.options.dir || this.destinationPath('public/src/modules/' + componentName + '/components/');
        const path = this.options.dir ? `public/${this.options.dir}` : this.destinationPath('public/src/modules/' + componentName + '/components/');
        //const dir = this.options.dir;
        const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
        const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
        var storeDir = "";

        this.log(this.options);
        if (path.indexOf("/components/") > 0) {
            var newDir = path.split("/components/")[0];
            storeDir = newDir + "/store/";
            this.log(storeDir);
        }
        else if (path.indexOf("\\components\\") > 0) {
            var newDir = path.split("\\components\\")[0];
            storeDir = newDir + "\\store\\";
            this.log(storeDir);
        }

        const componentDetails = {
            Component: lowerCase(componentName),
            Title: titleCase(componentName),
            CapsComponent: componentName.toUpperCase()
        }
        if (this.fs.exists(path + componentName + '.component.ts')) {
            this.env.error(componentName + " already exists in " + path);
        }
        else {
            this.fs.copyTpl(this.templatePath("modulename.component.css"), path + componentName + '.component.css', componentDetails);
            this.fs.copyTpl(this.templatePath("modulename.component.html"), path + componentName + '.component.html', componentDetails);
            this.fs.copyTpl(this.templatePath("modulename.component.ts"), path + componentName + '.component.ts', componentDetails);
            if (storeDir != "") {
                this.fs.copyTpl(this.templatePath("modulename.actions.ts"), storeDir + componentName + '.actions.ts', componentDetails);
                this.fs.copyTpl(this.templatePath("modulename.effects.ts"), storeDir + componentName + '.effects.ts', componentDetails);
                this.fs.copyTpl(this.templatePath("modulename.model.ts"), storeDir + componentName + '.model.ts', componentDetails);
                this.fs.copyTpl(this.templatePath("modulename.reducer.ts"), storeDir + componentName + '.reducer.ts', componentDetails);
            }
        }

    }

    install() {
        //this.installDependencies();
    }
};
