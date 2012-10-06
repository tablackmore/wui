/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *  wui.css
 *
 */
wui.controls.app = function () {
	"use strict";
	var that = wui.controls.control();
	that.css.addClass("wui_position_vbox");
	that.css.addClass("wui_position_fullscreen");
	that.show = function () {
		that.getDomElement().style.display = '-webkit-box';
	};
	return that;
};