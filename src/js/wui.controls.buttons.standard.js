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
    var that = wui.controls.control(),
        symbol = wui.controls.control("span");
    symbol.css.addClass("wui_symbol");
    that.appendControl(symbol);
    that.setText = function (text) {
        var textNode;
        if (text.length > 0) {
            textNode = document.createTextNode(text);
            that.getDomElement().innerHTML = "";
            that.getDomElement().appendChild(symbol.getDomElement());
            that.getDomElement().appendChild(textNode);
        } else {
            that.getDomElement().innerHTML = "";
            that.getDomElement().appendChild(symbol.getDomElement());
        }
    };
    that.setSymbol = function (text) {
        symbol.getDomElement().innerHTML = text;
    };
    that.css.addClass("wui_controls_button");
    return that;
};