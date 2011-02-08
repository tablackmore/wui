/*
 * A basic scroll panel.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *  wui_controls_panels.js
 *  wui_controls_panels_standard.js
 *  lib/iscroll/iscroll-3.7.1.js
 *
 *  wui.css
 *  wui_controls_panels_panel.css
 */
wui.controls.panels.scroll = function() {
    var that = wui.controls.control();
    var id = "scroll__" + that.getControlNumber();
    that.css.addClass("wui_position_flex");
    that.setId(id);
 
    var scroller =  wui.controls.panels.standard();
    that.appendControl(scroller);
	var mainDiv = that.getDomElement();
    that.scroll = new iScroll(scroller.getDomElement(), {
        desktopCompatibility: true
    });

    that.setText = function(text) {
        scroller.setText("<ul><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>"+text+"</li></ul>");
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
    };
    that.getDomElement = function() {
        return mainDiv;
    };
    return that;
};