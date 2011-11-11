 /*
 * A red button button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 * 
 *  wui_controls_buttons_standard.css
 *  wui_controls_buttons_red.css
 */
wui.controls.buttons.red = function() {
    var that = wui.controls.buttons.standard();
    that.css.addClass("wui_controls_buttons_red");
    return that;
};