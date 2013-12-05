/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A round red lamp button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *  wui_controls_buttons_greyLamp.js
 *
 * 	wui_controls_buttons_greyLamp.css
 *  wui_controls_buttons_redLamp.css
 */
wui.controls.buttons.redLamp = function () {
	"use strict";
	var that = wui.controls.buttons.greyLamp();
	that.css.addClass("wui_controls_buttons_redLamp");
	return that;
};