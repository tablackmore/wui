/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * An add button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *  wui_controls_buttons_add.css
 */
wui.controls.buttons.add = function () {
	"use strict";
	var that = wui.controls.buttons.standard();
	that.css.clear();
	that.css.addClass("wui_controls_buttons_add");
	that.setText("+");
	that.setText = undefined;
	return that;
};