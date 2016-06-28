var ApplicationConfiguration = (function(){
    var applicationModuleName = "todoApp"; // the name of our main module
    var applicationModuleVendorDependencies = []; // dependencies required by our module.
    // This is a simple function that we expose to define any sub module.
    var registerModule = function(moduleName,dependencies){
        angular.module(moduleName, dependencies || []);
        angular.module(applicationModuleName).requires.push(moduleName);
    }

    return{
        applicationModuleName : applicationModuleName,
        applicationModuleVendorDependencies : applicationModuleVendorDependencies,
        registerModule : registerModule
    }
})();