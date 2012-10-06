/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * This is a rounded list
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 *
 *  wui_controls_lists_rounded.css
 */
wui.controls.lists.rounded = function () {
	"use strict";
	var that = wui.controls.lists.standard();
	that.css.addClass("wui_controls_lists_rounded");
	return that;
};