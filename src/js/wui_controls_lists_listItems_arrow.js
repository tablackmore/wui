 /*
 * This is the standard listItem
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 *  wui_controls_lists_listItems.js
 */
wui.controls.lists.arrow = function() {
    var that = wui.controls.control("li");
    that.css.addClass("wui_position_hbox");
    var textDiv = wui.controls.control("div");
    textDiv.css.addClass("wui_position_flex");
    var imgElement = wui.controls.control("div");
    imgElement.setClass("wui_control_lists_arrow_arrowLeft");
    that.setText = function(text) {
        textDiv.getDomElement().innerHTML = text;
    };
    var mainElement = that.getDomElement();
	mainElement.appendChild(textDiv.getDomElement());
    mainElement.appendChild(imgElement.getDomElement());
    return that;
};
