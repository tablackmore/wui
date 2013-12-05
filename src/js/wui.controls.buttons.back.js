/*jslint browser:true */
/*global wuid: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A simple back button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *
 *  wui_controls_buttons_back.css
 */
wui.controls.buttons.back = function () {
	"use strict";
	var that = wui.controls.buttons.standard();
	that.setSymbol("<");
	that.css.addClass("wui_controls_buttons_back");
	return that;
};