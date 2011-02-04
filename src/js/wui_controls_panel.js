/*
 * A basic titlebar with three containers.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 * 
 *  wui.css
 *  target/controls/wui_panel.css
 */
wui.controls.panel = function() {
    var that = wui.controls.control();
    that.css.addClass("wui_controls_panel");
    that.css.addClass("wui_position_vbox");
    that.css.addClass("wui_position_flex");
    that.setText = function(text) {
        that.getDomElement().innerHTML = text;
    };
    that.show = function() {
        that.getDomElement().style.display = '-webkit-box';
    };
    return that;
};