'use strict';
const Generator = require('yeoman-generator');
const htmlWiring = require("html-wiring");
module.exports = class extends Generator {
    writing() {

        const serviceName = this.options.name || 'myService';
        const path = this.options.dir ? `public/${this.options.dir}` : this.destinationPath('public/src/modules/' + serviceName + '/components/');

        const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
        const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
        const componentDetails = {
            Component: lowerCase(serviceName),
            Title: titleCase(serviceName),
            CapsComponent: serviceName.toUpperCase()
        }
        this.log(path);
        var storeDir = "";
        if (path.indexOf("/services/") > 0) {
            var newDir = path.split("/services/")[0];
            storeDir = newDir + "/store/";
        }
        else if (path.indexOf("\\services\\") > 0) {
            var newDir = path.split("\\services\\")[0];
            storeDir = newDir + "\\store\\";
        }
        if (this.fs.exists(path + serviceName + '.service.ts')) {
            this.env.error(serviceName + " already exists in " + path);
        }
        if (!this.fs.exists(storeDir + serviceName + '.model.ts')) {
            this.fs.copyTpl(this.templatePath("modulename.model.ts"), this.destinationPath(storeDir + '/' + serviceName + '.model.ts'), componentDetails);
        }
        this.fs.copyTpl(this.templatePath("modulename.service.ts"), this.destinationPath(path + '/' + serviceName + '.service.ts'), componentDetails);
    }

    install() {
        //this.installDependencies();
    }
};
