/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A standard button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *
 *  wui_controls_buttons_standard.css
 */
wui.controls.buttons.standard = function () {
    "use strict";
    var that = wui.controls.control();
    that.setText = function (text) {
        that.getDomElement().innerHTML = text;
    };
    that.css.addClass("wui_controls_buttons_standard");
    return that;
};