/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A red button button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *
 *  wui_controls_buttons_standard.css
 *  wui_controls_buttons_red.css
 */
wui.controls.buttons.red = function () {
	"use strict";
	var that = wui.controls.buttons.standard();
	that.css.addClass("wui_controls_buttons_red");
	return that;
};