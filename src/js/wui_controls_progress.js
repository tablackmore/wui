

wui.controls.progress = function() {
	var that = wui.controls.control();
	that.setText = function(text) {
		that.getDomElement().innerHTML = text;
	};
	that.css.addClass("wui_control_progress");
	that.hide();
	return that;
};