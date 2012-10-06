/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * This is a standard list
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 */
wui.controls.lists.standard = function () {
    "use strict";
    var that = wui.controls.control("ul");
    that.css.addClass("wui_controls_lists_standard");
    that.items = (function () {
        var add = function (listItem) {
                that.appendControl(listItem);
            };
        return {
            add: add
        };
    }());
    that.clear = function () {
        that.getDomElement().innerHTML = "";
    };
    return that;
};