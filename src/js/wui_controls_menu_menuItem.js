/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * Create a menuItem to load in a menuBar
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_menu.js
 *
 *  wui_controls_menu_menuItem.css
 */
wui.controls.menu.menuItem = function () {
    "use strict";
    var panelControl, that = wui.controls.control("span"),
        icon = wui.controls.control(),
        selected = false,
        normalIcon = "",
        selectedIcon = "",
        a = wui.controls.control("a");
    that.css.addClass("wui_position_flex");
    that.css.addClass("wui_control_menuItem");
    icon.css.addClass("wui_control_menuItem_icon");
    that.setText = function (text) {
        a.getDomElement().innerHTML = text;
    };
    that.setPanel = function (panel) {
        panelControl = panel;
    };
    that.getPanel = function () {
        return panelControl;
    };
    that.showPanel = function () {
        if (panelControl) {
            panelControl.show();
        }
    };
    that.hidePanel = function () {
        if (panelControl) {
            panelControl.hide();
        }
    };
    that.setIconControl = function (text) {
        normalIcon = text;
        if (!selected) {
            icon.getDomElement().innerHTML = normalIcon;
        }
    };
    that.setSelectedIconControl = function (text) {
        selectedIcon = text;
    };
    that.select = function () {
        if (selectedIcon.length > 1) {
            icon.getDomElement().innerHTML = selectedIcon;
        }
        selected = true;
        that.css.addClass("wui_control_menuItem_active");
        that.showPanel();
    };
    that.deselect = function () {
        icon.getDomElement().innerHTML = normalIcon;
        selected = false;
        that.css.removeClass("wui_control_menuItem_active");
        that.hidePanel();
    };
    that.show = function () {
        that.getDomElement().style.display = '-webkit-box';
    };
    that.appendControl(icon);
    that.appendControl(a);
    return that;
};