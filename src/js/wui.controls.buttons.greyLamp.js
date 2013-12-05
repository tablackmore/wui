/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A round grey lamp button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *
 *  wui_controls_buttons_greyLamp.css
 */
wui.controls.buttons.greyLamp = function () {
	"use strict";
	var that = wui.controls.buttons.standard();
	that.css.clear();
	that.css.addClass("wui_controls_buttons_greyLamp");
	return that;
};