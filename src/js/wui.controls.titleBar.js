/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A basic titlebar with three containers.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *
 *  wui.css
 *  wui_controls_titlebar.css
 */
wui.controls.titleBar = function () {
    "use strict";
    var that = wui.controls.control("header"),
        mainDiv = that.getDomElement(),
        title = document.createElement("h1");
    that.rightContainer = wui.controls.control();
    that.leftContainer = wui.controls.control();
    title.className = "wui_position_flex wui_controls_titleBar_title";
    that.css.addClass("wui_position_hbox");
    that.css.addClass("wui_controls_titleBar");
    that.rightContainer.css.addClass("wui_controls_titleBar_rightContainer");
    that.leftContainer.css.addClass("wui_controls_titleBar_leftContainer");
    that.show = function () {
        that.getDomElement().style.display = PrefixFree.prefix + 'box';
    };
    that.setText = function (text) {
        title.innerHTML = text;
    };
    mainDiv.appendChild(that.leftContainer.getDomElement());
    mainDiv.appendChild(title);
    mainDiv.appendChild(that.rightContainer.getDomElement());
    return that;
};