/*
 * A basic scroll panel.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *  wui_controls_panels.js
 *  wui_controls_panels_standard.js
 *  lib/iscroll/iscroll-lite.js
 *
 *  wui.css
 *  wui_controls_panels_panel.css
 */
wui.controls.panels.scroll = function() {
    var that = wui.controls.control();//wrapper
    var id = "scroll__" + that.getControlNumber();
    that.css.addClass("wui_position_flex");
    that.setId(id);
 
    var scroller =  wui.controls.panels.standard();//scroller
    that.appendControl(scroller);
	var mainDiv = that.getDomElement();
    that.scroll = new iScroll(that.getDomElement(),{
		onBeforeScrollStart: function (e) {
			var target = e.target;
			while (target.nodeType != 1) target = target.parentNode;

			if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
				e.preventDefault();
		}
	});

    that.setText = function(text) {
        scroller.setText(text);
        that.scroll.refresh();
    };
    that.appendControl= function(control) {
        scroller.getDomElement().appendChild(control.getDomElement());
        that.scroll.refresh();
    };
    that.show = function() {
        that.getDomElement().style.display = 'block';
        that.scroll.refresh();
    };
    that.scroll.refresh();

	// Prevent other parts of the page from being draggable
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    },
    false);

    that.clear = function() {
        scroller.getDomElement().innerHTML = "";
        that.scroll.refresh();
    };
    that.getDomElement = function() {
        return mainDiv;
    };
    return that;
};