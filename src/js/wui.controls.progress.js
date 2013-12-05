/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
wui.controls.progress = function () {
	"use strict";
	var that = wui.controls.control();
	that.setText = function (text) {
		that.getDomElement().innerHTML = text;
	};
	that.css.addClass("wui_control_progress");
	that.hide();
	return that;
};