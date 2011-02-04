/*
 * A basic titlebar with three containers.
 * Dependencies:
 *  wui_namespace.js
 *  controls/wui_control.js
 * 
 *  wui_main.css
 *  cotrols/target/wui_titlebar.css
 */
wui.controls.titleBar = function() {
    var that = wui.controls.control();
    var mainDiv = that.getElement();
    var rightDiv = wui.controls.control();
    var leftDiv = wui.controls.control();
    var title = document.createElement("header");
    title.className = "flex";
    
    that.setClass("titleBar");
    rightDiv.setClass("rightTitlebarContainer");
    leftDiv.setClass("leftTitlebarContainer");
    
    that.show = function() {
        that.getElement().style.display = "-webkit-box";
    };
    
    that.setText = function(text) {
        title.innerHTML = text;
    };
       
    that.rightContainer = (function() {
        var addElement = function(element) {
            rightDiv.getElement().appendChild(element);
        };
        var clear = function() {
            rightDiv.getElement().innerHTML = "";
        };
        return{
            addElement: addElement,
            clear: clear
        };
    }());
    
    that.leftContainer = (function() {
        var addElement = function(element) {
            leftDiv.getElement().appendChild(element);
        };
        var clear = function() {
            leftDiv.getElement().innerHTML = "";
        };
        return{
            addElement: addElement,
            clear: clear
        };
    }());
    
    mainDiv.appendChild(leftDiv.getElement());
    mainDiv.appendChild(title);
    mainDiv.appendChild(rightDiv.getElement());
    return that;
};