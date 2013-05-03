var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "../vendor/jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.layoutmanager",
            "location": "../vendor/jam/backbone.layoutmanager",
            "main": "backbone.layoutmanager.js"
        },
        {
            "name": "backbone.localstorage",
            "location": "../vendor/jam/backbone",
            "main": "backbone.localStorage.js"
        },
        {
            "name": "jquery",
            "location": "../vendor/jam/jquery",
            "main": "jquery.js"
        },
        {
            "name": "lodash",
            "location": "../vendor/jam/lodash",
            "main": "lodash.js"
        },
        {
            "name" : "handlebars",
            "location" : "../vendor/jam/handlebars",
            "main" : "handlebars.js"
        },
        {
            "name" : "json2",
            "location" : "../vendor/jam/JSON-js",
            "main" : "json2.js"
        },
        {
            "name" : "text",
            "location" : "../vendor/jam/require",
            "main" : "text.js"
        }
    ],
    "version": "0.2.11",
    "shim": {
        "backbone": {
            "deps": [
                "jquery",
                "lodash",
                "json2"
            ],
            "exports": "Backbone"
        },
        "backbone.localstorage" : {
            "deps" : ["backbone"],
            "exports" : "Backbone"
        },
        "backbone.layoutmanager": {
            "deps": [
                "jquery",
                "backbone",
                "lodash"
            ],
            "exports": "Backbone.LayoutManager"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages, shim: jam.shim});
}
else {
    var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}