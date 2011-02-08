 /*
 * This is a standard list
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 */
wui.controls.lists.standard = function(){
	 var that = wui.controls.control("ul");
     that.css.addClass("wui_controls_lists_standard");
     that.items =(function() {
        var add = function(listItem) {
     		that.appendControl(listItem);
     	};
     	return {
     		add: add
     	}
     }());
     that.clear = function(){
        that.getDomElement().innerHTML = "";
     };
     return that;
};

