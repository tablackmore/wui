/*
 * 
 * This is the very simple base object for building all other controls
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
wui.controls.control = ( function() {
    var count = 0;
    return function(type) {
        var idNumber = count;
        count += 1;
        var elementName = type ? type: "div";
        var mainElement = document.createElement(elementName);
        var show = function() {
            mainElement.style.display = 'block';
        };
        var hide = function() {
            mainElement.style.display = 'none';
        };
        var toggle = function() {
            if (mainElement.style.display === 'none') {
                show();
            } else {
                hide();
            }
        };
        
        var getControlNumber = function() {
            return idNumber;
        };
        
        var setOnClick = function(fn) {
            mainElement.onclick = fn;
        };
        
        var click = function(){
            var ev = document.createEvent('MouseEvents');
            ev.initEvent('click', true, true);
            mainElement.dispatchEvent(ev);
        };
        
        var css = (function(){
          var classes = [];
          
          var updateElement = function(){
            var i;
            var result = "";
            for(i=0; i < classes.length; i++){
              result += classes[i] + " ";
            }
            mainElement.className = result;
          };
          
          var toggleClass = function(className){
            var i;
            var exists = false;
            for(i=0; i < classes.length; i++){
              if(className === classes[i]){
                exists = true;
                break;
              }
            }
            if(!exists){
              addClass(className);
            } else {
              removeClass(className)
            }
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
          
          var clear = function(className){
            classes = [];
            updateElement();
          };
          
          return {
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,
            clear: clear
          }
        }());
        var setId = function(text) {
            mainElement.id = text;
        };
        var getDomElement = function() {
            return mainElement;
        };
        var appendControl = function(control) {
            mainElement.appendChild(control.getDomElement());
        };
        return{
            getDomElement: getDomElement,
            getControlNumber: getControlNumber,
            appendControl: appendControl,
            show: show,
            hide: hide,
            toggle: toggle,
            setOnClick: setOnClick,
            click: click,
            css: css,
            setId: setId
        };
    };
}());