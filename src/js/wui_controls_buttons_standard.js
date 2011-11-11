 /*
 * A standard button
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 * 
 *  wui_controls_buttons_standard.css
 */
wui.controls.buttons.standard = function() {
    var that = wui.controls.control(); 
    that.setText = function(text) {
        that.getDomElement().innerHTML = text;
    };
    /*button = wui.controls.control();
    that.appendControl(button);
    that.setText = function(text) {
        button.getDomElement().innerHTML = text;
    };
    that.setPadding = function(amount){
    	that.getDomElement().style.padding = amount+ "px";
    };
    that.css.clear = function(){
    	button.css.clear();
    };
    that.setOnClick = function(func){
    	button.setOnClick(func);
    };
    that.css.addClass = function(name){
    	console.log("updating css");
    	button.css.addClass(name);
    };*/
    that.css.addClass("wui_controls_buttons_standard");
    return that;
};