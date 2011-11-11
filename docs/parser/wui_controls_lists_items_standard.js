/*
 * This is the standard listItem
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 * 
 *  wui_controls_lists_standard.css
 */
wui.controls.lists.items.standard = function(text) {
    var that = wui.controls.control("li");
    that.setText = function(text) {
        that.getDomElement().innerHTML = text;
    };
    if (typeof text !== "undefined") {
        that.setText(text);
    }
    return that;
};