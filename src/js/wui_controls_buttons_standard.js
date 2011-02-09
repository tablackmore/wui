 /*
 * A standard button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 * 
 *  wui_controls_buttons_standard.css
 */
wui_controls_buttons_standard = function() {
    var that = wui.controls.control();
    that.setText = function(text) {
        that.getDomElement().innerHTML = text;
    };
    that.css.addClass("wui_controls_buttons_standard");
    return that;
};