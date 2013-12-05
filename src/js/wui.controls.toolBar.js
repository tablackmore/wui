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
wui.controls.toolBar = function () {
    "use strict";
    var that = wui.controls.control(),
        mainDiv = that.getDomElement();
    that.css.addClass("wui_position_hbox");
    that.css.addClass("wui_controls_toolBar");
    that.leftContainer = wui.controls.control();
    that.middleContainer = wui.controls.control();
    that.rightContainer = wui.controls.control();
    that.leftContainer.css.addClass("wui_controls_toolBar_container");
    that.leftContainer.css.addClass("wui_position_flex");
    that.middleContainer.css.addClass("wui_controls_toolBar_container");
    that.middleContainer.css.addClass("wui_position_flex");
    that.rightContainer.css.addClass("wui_controls_toolBar_container");
    that.rightContainer.css.addClass("wui_position_flex");
    that.show = function () {
        that.getDomElement().style.display = PrefixFree.prefix + 'box';
    };
    mainDiv.appendChild(that.leftContainer.getDomElement());
    mainDiv.appendChild(that.middleContainer.getDomElement());
    mainDiv.appendChild(that.rightContainer.getDomElement());
    return that;
};