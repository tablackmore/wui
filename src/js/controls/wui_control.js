/*
 * This is the very simple base object for building all other controls
 * Dependencies: 
 *  wui_namespace.js
 */
wui.controls.control = ( function() {
    var count = 0;
    return function(type) {
        var idNumber = count;
        count += 1;
        var elementName = type ? type: "div";
        var mainDiv = document.createElement(elementName);

        var show = function() {
            mainDiv.style.display = 'block';
        };
        
        var hide = function() {
            mainDiv.style.display = 'none';
        };
        
        var toggle = function() {
            if (mainDiv.style.display === 'none') {
                show();
            } else {
                hide();
            }
        };
        
        var getControlNumber = function() {
            return idNumber;
        };
        
        var setOnClick = function(fn) {
            mainDiv.onclick = fn;
        };
        
        var css = (function(){
          var classes = [];
          
          var updateElement = function(){
            var i;
            var result = "";
            for(i=0; i < classes.length; i++){
              result += classes[i] + " ";
            }
            mainDiv.className = result;
          };
          
          var addClass = function(className){
            var i;
            var exists = false;
            for(i=0; i < classes.length; i++){
              if(className === classes[i]){
                exists = true;
                break;
              }
            }
            if(!exists){
              classes.push(className);
              updateElement();
            }
          };
          
          var removeClass = function(className){
            var i;
            var newClasses = [];
            var deleted = false;
            for(i=0; i < classes.length; i++){
              if(className !== classes[i]){
                newClasses.push(classes[i]);
              }
            }
            classes = newClasses;
            updateElement();
          };
          
          return {
            addClass: addClass,
            removeClass: removeClass,
          }
        }());
        
        var setWidth = function(width) {
            mainDiv.style.width = width;
        };
        var setHeight = function(height) {
            mainDiv.style.height = height;
        };
        var setId = function(text) {
            mainDiv.id = text;
        };
        var appendControl = function(control) {
            mainDiv.appendChild(control.getDomElement());
        };
        var getDomElement = function() {
            return mainDiv;
        };
        return{
            getDomElement: getDomElement,
            getControlNumber: getControlNumber,
            appendControl: appendControl,
            show: show,
            hide: hide,
            toggle: toggle,
            setWidth: setWidth,
            setHeight: setHeight,
            setOnClick: setOnClick,
            css: css,
            setId: setId
        };
    };
}());