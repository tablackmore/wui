wui.controls.lists.fullScreen = function(){
	 var that = wui.controls.control("ul");
     that.css.addClass("wui_controls_lists_fullScreen");
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

