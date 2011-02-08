 /*
 * This is the standard listItem
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 */
wui.controls.lists.listItems.standard = function() {
    var that = wui.controls.control("li");
    that.setText = function(text) {
        that.getDomElement().innerHTML = text;
    };
    return that;
};