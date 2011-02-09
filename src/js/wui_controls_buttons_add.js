 /*
 * An add button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 * 
 *  wui_controls_buttons_add.css
 */
wui.controls.buttons.add = function() {
    var that = wui.controls.buttons.standard();
    that.css.clear();
    that.css.addClass("wui_controls_buttons_add");
    that.setText("+");
    return that;
};