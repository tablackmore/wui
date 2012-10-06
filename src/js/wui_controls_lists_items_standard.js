/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * This is the standard listItem
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 *
 *  wui_controls_lists_standard.css
 */
wui.controls.lists.items.standard = function (text) {
	"use strict";
	var that, mainElement;
	that = wui.controls.control("li");
	mainElement = that.getDomElement();
	that.setText = function (text) {
		mainElement.innerHTML = text;
	};
	if (typeof text !== "undefined") {
		that.setText(text);
	}
	that.setOnClick = function (fn) {
		mainElement.onclick = fn;
	};
	that.click = function () {
		var ev = document.createEvent('MouseEvents');
		ev.initEvent('click', true, true);
		mainElement.dispatchEvent(ev);
	};
	return that;
};