/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * Miscellaneous functions for helping out in times of trouble
 */
wui.misc = (function () {
    "use strict";
    var script, array;
    array = (function () {
        // Array Remove - By John Resig (MIT Licensed)
        // can remove as simply as remove(index); where index is index of array 
        // element to remove
        var remove, binarySearch;
        remove = function (array, from, to) {
            var rest = array.slice((to || from) + 1 || array.length);
            array.length = from < 0 ? array.length + from : from;
            return array.push.apply(array, rest);
        };
        /*      A binary search function for arrays.
         *      array : array to search
         *      find : the item to find
         *      compareFn : a compare function that takes argument
         *                  (array[i], find)
         *                  returns 0 when they are equal
         *                  returns -1 when the a is less than b
         *                  returns +1 when the a is greater than b
         *                  e.g. Compare strings:
         *                  function(a,b){ return (a===b)?0:(a>b)?1:-1; }
         *                  Compare numbers:
         *                  function(a,b){return a - b;}
         */
        binarySearch = function (array, find, compareFn) {
            var i, comparison, low = 0,
                high = array.length - 1;
            while (low <= high) {
                i = parseInt((low + high) / 2, 10);
                comparison = compareFn(array[i], find);
                if (comparison < 0) {
                    low = i + 1;
                    continue;
                }
                if (comparison > 0) {
                    high = i - 1;
                    continue;
                }
                return i;
            }
            return null;
        };
        return {
            remove: remove,
            binarySearch: binarySearch
        };
    }());
    script = (function () {
        /*
         * Public method to load external scripts
         *
         *      src:        url to script
         *      timeOut:    remove script after certain time. (null if we
         *                  shouldn't remove)
         *      callback:   callback method that will fire when the script is
         *                  loaded.
         */
        var jsonpLoader, loadScript;
        loadScript = (function () {
            var loadedScripts = [];
            return function (src, callback, timeOut) {
                //console.log(src, timeOut,callback);
                var i, removeCurrentScript, s, loaded = false;
                for (i = 0; i < loadedScripts.length; i = i + 1) {
                    if (loadedScripts[i] === src) {
                        loaded = true;
                        break;
                    }
                }
                if (!loaded) {
                    s = document.createElement("script");
                    s.src = src;
                    s.id = src;
                    s.type = "text/javascript";
                    s.onload = function () {
                        if (callback) {
                            callback();
                            loadedScripts.push(src);
                        }
                    };
                    document.getElementsByTagName('head')[0].appendChild(s);
                    if (timeOut) {
                        removeCurrentScript = function () {
                            var eltScript = document.getElementById(src);
                            eltScript.parentNode.removeChild(eltScript);
                        };
                        setTimeout(removeCurrentScript, timeOut);
                    }
                } else {
                    if (callback) {
                        callback();
                    }
                }
            };
        }());
        jsonpLoader = (function () {
            var id = 0; // Keep track of the number of times we call this function
            return function (url, callback) {
                var thisId = id,
                    s = document.createElement("script"),
                    separator = url.indexOf('?') > 0 ? "&" : "?";
                window["jsonp" + thisId] = function (data) {
                    if (callback) {
                        callback(data);
                    }
                };
                s.src = url + separator + "callback=" + "jsonp" + thisId;
                s.type = "text/javascript";
                s.onload = function () {
                    //when everything is loaded tidy up, 
                    //clear our unique global function
                    window["jsonp" + thisId] = undefined;
                    document.getElementsByTagName('head')[0].removeChild(s);
                };
                //add the script tag to the head section
                document.getElementsByTagName('head')[0].appendChild(s);
                id = id + 1; // Generate  unique number for the request
            };
        }());
        return {
            loadScript: loadScript,
            jsonpLoader: jsonpLoader
        };
    }());
    return {
        script: script,
        array: array
    };
}());