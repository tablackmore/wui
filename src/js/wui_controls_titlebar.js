/*
 * A basic titlebar with three containers.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 * 
 *  wui.css
 *  cotrols/target/wui_titlebar.css
 */
wui.controls.titleBar = function() {
    var that = wui.controls.control("header");
    var mainDiv = that.getDomElement();
    that.rightContainer = wui.controls.control();
    that.leftContainer = wui.controls.control();
    var title = document.createElement("h1");
    
    title.className = "wui_position_flex wui_control_titleBar_title";
    that.css.addClass("wui_position_hbox");
    that.css.addClass("wui_control_titleBar");
    that.rightContainer.css.addClass("wui_control_titleBar_rightContainer");
    that.leftContainer.css.addClass("wui_control_titleBar_leftContainer");
    
    that.show = function() {
        that.getDomElement().style.display = "-webkit-box";
    };
    
    that.setText = function(text) {
        title.innerHTML = text;
    };
       
    mainDiv.appendChild(that.leftContainer.getDomElement());
    mainDiv.appendChild(title);
    mainDiv.appendChild(that.rightContainer.getDomElement());
    
    return that;
};