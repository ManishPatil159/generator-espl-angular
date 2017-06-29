'use strict';
const Generator = require('yeoman-generator');
const htmlWiring = require("html-wiring");
module.exports = class extends Generator {
    writing() {

        const componentName = this.options.name || 'myComponent';
        const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
        const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
        const componentDetails = {
            Component: lowerCase(componentName),
            Title: titleCase(componentName),
            CapsComponent: componentName.toUpperCase()
        }

        var path = 'public/src/modules/config.ts';
        var routingHook = "//#===== yeoman routing hook (This line is required for our yeoman generator and should not be changed.) =====#";
        var reducerImportHook = "//#===== yeoman reducer import hook (This line is required for our yeoman generator and should not be changed.) =====#";
        var moduleReducerHook = "//#===== yeoman module reducer hook (This line is required for our yeoman generator and should not be changed.) =====#";
        var file = htmlWiring.readFileAsString(path);
        var routingData = "routing.push({ path: '" + componentDetails.Component + "', loadChildren: 'modules/" + componentName + "/" + componentName + ".module' });";
        var reducerImportData = "import { " + componentDetails.Title + "Reducer } from './" + componentName + "/" + "store/" + componentName + ".reducer';"
        var moduleReducerData = componentDetails.Component + ": " + componentDetails.Title + "Reducer,";

        var newfile = file.replace(routingHook, routingHook + '\n' + routingData);
        newfile = newfile.replace(reducerImportHook, reducerImportHook + '\n' + reducerImportData);
        newfile = newfile.replace(moduleReducerHook, moduleReducerHook + '\n' + moduleReducerData);
        htmlWiring.writeFileFromString(newfile, path);
        // htmlWiring.writeFileFromString(file.replace(routingHook, routingHook + '\n' + routingData), path);
        // htmlWiring.writeFileFromString(file.replace(reducerImportHook, reducerImportHook + '\n' + reducerImportData), path);
        // htmlWiring.writeFileFromString(file.replace(moduleReducerHook, moduleReducerHook + '\n' + moduleReducerData), path);

        // if (file.indexOf(routingData) === -1) {
        //     htmlWiring.writeFileFromString(file.replace(routingHook, routingHook + '\n' + routingData), path);
        // }



        this.fs.copyTpl(this.templatePath("modulename.module.ts"), this.destinationPath('public/src/modules/' + componentName + '/' + componentName + '.module.ts'), componentDetails);
        this.fs.copyTpl(this.templatePath("modulename.routing.ts"), this.destinationPath('public/src/modules/' + componentName + '/' + componentName + '.routing.ts'), componentDetails);
        this.fs.copyTpl(this.templatePath("modulename.component.css"), this.destinationPath('public/src/modules/' + componentName + '/' + 'components/' + componentName + '.component.css'), componentDetails);
        this.fs.copyTpl(this.templatePath("modulename.component.html"), this.destinationPath('public/src/modules/' + componentName + '/' + 'components/' + componentName + '.component.html'), componentDetails);
        this.fs.copyTpl(this.templatePath("modulename.component.ts"), this.destinationPath('public/src/modules/' + componentName + '/' + 'components/' + componentName + '.component.ts'), componentDetails);
        this.fs.copyTpl(this.templatePath("modulename.service.ts"), this.destinationPath('public/src/modules/' + componentName + '/' + 'services/' + componentName + '.service.ts'), componentDetails);
        this.fs.copyTpl(this.templatePath("modulename.actions.ts"), this.destinationPath('public/src/modules/' + componentName + '/' + 'store/' + componentName + '.actions.ts'), componentDetails);
        this.fs.copyTpl(this.templatePath("modulename.effects.ts"), this.destinationPath('public/src/modules/' + componentName + '/' + 'store/' + componentName + '.effects.ts'), componentDetails);
        this.fs.copyTpl(this.templatePath("modulename.model.ts"), this.destinationPath('public/src/modules/' + componentName + '/' + 'store/' + componentName + '.model.ts'), componentDetails);
        this.fs.copyTpl(this.templatePath("modulename.reducer.ts"), this.destinationPath('public/src/modules/' + componentName + '/' + 'store/' + componentName + '.reducer.ts'), componentDetails);
    }

    install() {
        this.installDependencies();
    }
};
