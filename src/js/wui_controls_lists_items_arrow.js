/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * This is the standard listItem
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 *  wui_controls_lists_items.js
 */
wui.controls.lists.items.arrow = function (text) {
    "use strict";
    var that, textDiv, imgElement, mainElement;
    that = wui.controls.control("li");
    that.css.addClass("wui_position_hbox");
    textDiv = wui.controls.control("div");
    textDiv.css.addClass("wui_position_flex");
    imgElement = wui.controls.control("div");
    imgElement.css.addClass("wui_controls_lists_items_arrow_icon");
    mainElement = that.getDomElement();
    that.setText = function (text) {
        textDiv.getDomElement().innerHTML = text;
    };
    if (typeof text !== "undefined") {
        that.setText(text);
    }
    that.setOnClick = function (fn) {
        mainElement.onclick = fn;
    };
    that.click = function () {
        var ev = document.createEvent('MouseEvents');
        ev.initEvent('click', true, true);
        mainElement.dispatchEvent(ev);
    };
    that.appendControl(textDiv);
    that.appendControl(imgElement);
    return that;
};