 /*
 * A round orange lamp button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *  wui_controls_buttons_greyLamp.js
 * 
 *  wui_controls_buttons_greyLamp.css
 *  wui_controls_buttons_orangeLamp.css
 */
wui.controls.buttons.orangeLamp = function() {
    var that = wui.controls.buttons.greyLamp();
    that.css.addClass("wui_controls_buttons_orangeLamp");
    return that;
};