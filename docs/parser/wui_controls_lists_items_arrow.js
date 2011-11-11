 /*
 * This is the standard listItem
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 *  wui_controls_lists_items.js
 */
wui.controls.lists.items.arrow = function(text) {
    var that = wui.controls.control("li");
    that.css.addClass("wui_position_hbox");
    var textDiv = wui.controls.control("div");
    textDiv.css.addClass("wui_position_flex");
    var imgElement = wui.controls.control("div");
    imgElement.css.addClass("wui_controls_lists_items_arrow_icon");
    that.setText = function(text) {
        textDiv.getDomElement().innerHTML = text;
    };
    if (typeof text !== "undefined") {
        that.setText(text);
    }
	that.appendControl(textDiv);
    that.appendControl(imgElement);
    return that;
};
