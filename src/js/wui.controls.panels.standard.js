/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A basic panel.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *  wui_controls_panels.js
 *
 *  wui.css
 */
wui.controls.panels.standard = function () {
    "use strict";
    var that = wui.controls.control();
    that.css.addClass("wui_controls_panel");
    that.css.addClass("wui_position_vbox");
    that.css.addClass("wui_position_flex");
    that.setText = function (text) {
        that.getDomElement().innerHTML = text;
    };
    that.show = function () {
        that.getDomElement().style.display = PrefixFree.prefix + 'box';
    };
    return that;
};