 /*
 * This is a rounded list
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 * 
 *  wui_controls_lists_rounded.css
 */
wui.controls.lists.rounded = function(){
	var that = wui.controls.lists.standard();
    that.setClass("wui_controls_lists_rounded");
    return that;
};
