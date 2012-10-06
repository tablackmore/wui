/*jslint browser:true */
/*global iScroll: false, wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A basic scroll panel.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *  wui_controls_panels.js
 *  wui_controls_panels_standard.js
 *  lib/iscroll/iscroll-lite.js
 *
 *  wui.css
 *  wui_controls_panels_panel.css
 */
wui.controls.panels.scroll = function () {
    "use strict";
    var that = wui.controls.control(),
        id = "scroll__" + that.getControlNumber(),
        scroller = wui.controls.panels.standard(),
        mainDiv = that.getDomElement();
    that.css.addClass("wui_position_flex");
    that.setId(id);
    that.appendControl(scroller);
    that.scroll = new iScroll(that.getDomElement(), {
        onBeforeScrollStart: function (e) {
            var target = e.target;
            while (target.nodeType !== 1) {
                target = target.parentNode;
            }
            if (target.tagName !== 'SELECT' && target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
                e.preventDefault();
            }
        }
    });
    that.setText = function (text) {
        scroller.setText(text);
        that.scroll.refresh();
    };
    that.appendControl = function (control) {
        scroller.getDomElement().appendChild(control.getDomElement());
        that.scroll.refresh();
    };
    that.show = function () {
        that.getDomElement().style.display = 'block';
        that.scroll.refresh();
    };
    that.scroll.refresh();
    // Prevent other parts of the page from being draggable
    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);
    that.clear = function () {
        scroller.getDomElement().innerHTML = "";
        that.scroll.refresh();
    };
    that.getDomElement = function () {
        return mainDiv;
    };
    return that;
};