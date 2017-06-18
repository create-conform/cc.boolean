/////////////////////////////////////////////////////////////////////////////////////////////
//
// cc.boolean
//
//    Library for processing and validating booleans.
//
// License
//    Apache License Version 2.0
//
// Copyright Nick Verlinden (info@createconform.com)
//
/////////////////////////////////////////////////////////////////////////////////////////////

(function() {
    function Boolean() {
        var self = this;

        // validator
        this.getProperties = function(obj) {
            return [];
        };
        this.isValid = function(obj) {
            return Object.prototype.toString.call(obj) === "[object Boolean]";
        };
    }

    var singleton;
    (function (obj, factory) {
        var supported = false;
        if (typeof define === "function" && (define.amd || define.using)) {
            define(factory);
            if (define.using) {
                define.Loader.waitFor("pkx", function() {
                    // set optional validator from dependencies
                    var mod = define.cache.get("cc.validate.1", "minor");
                    if (mod) {
                        Boolean.prototype = mod.factory().Validator;
                    }
                });
            }
            supported = true;
        }
        if (typeof module === "object" && module.exports && typeof require != "undefined" && typeof require.main != "undefined" && require.main !== module) {
            module.exports = factory();
            Boolean.prototype = require("./cc.validate").Validator;
            supported = true;
        }
        if (!supported) {
            obj.returnExports = factory();
        }
    }(this, function() {
        if (singleton) {
            return singleton;
        }
        singleton = new (Function.prototype.bind.apply(Boolean, arguments));
        return singleton;
    }));
})();