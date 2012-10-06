/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * Create a menubar
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_menu.js
 *
 *  wui_controls_menu_menuBar.css
 */
wui.controls.menu.menuBar = function () {
    "use strict";
    var activeItem, that = wui.controls.control("nav"),
        items = [];
    that.css.addClass("wui_position_hbox");
    that.css.addClass("wui_control_menuBar");
    that.setActive = function (menuItem) {
        var i;
        for (i = 0; i < items.length; i = i + 1) {
            items[i].deselect();
        }
        menuItem.select();
        activeItem = menuItem;
    };
    that.getActive = function () {
        return activeItem;
    };
    that.items = (function () {
        var add = function (menuItem) {
                menuItem.setOnClick(function () {
                    that.setActive(menuItem);
                });
                items.push(menuItem);
                that.appendControl(menuItem);
            };
        return {
            add: add
        };
    }());
    return that;
};