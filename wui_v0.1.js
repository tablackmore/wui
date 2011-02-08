/******************************************************************
Copyright (c) 2011 Tom Blackmore
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. The name of the author may not be used to endorse or promote products
   derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
********************************************************************/
/*
 * Namespace for all html base controls
 */
var wui = {};
/*
 * This is the controls namespace
 * Dependencies: 
 *  wui.js
 */
wui.controls = {};/*
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
        var getDomElement = function() {
            return mainDiv;
        };
        var appendControl = function(control) {
            mainDiv.appendChild(control.getDomElement());
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
}());/**
 * @projectDescription  A basic titlebar with three containers.
 * @author Tom Blackmore
 * @version 0.1
 * 
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 * 
 *  wui.css
 * 
 */
wui.controls.app = function(){
    var that = wui.controls.control();
    that.css.addClass("wui_position_vbox");
    that.css.addClass("wui_position_fullscreen");
    that.show = function(){
        that.getDomElement().style.display = '-webkit-box';
    };
    return that;
};

 /*
 * This is the panels namespace
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
 wui.controls.panels = {};/*
 * A basic panel.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *  wui_controls_panels.js
 * 
 *  wui.css
 *  target/controls/wui_panel.css
 */
wui.controls.panels.standard = function() {
    var that = wui.controls.control();
    that.css.addClass("wui_controls_panel");
    that.css.addClass("wui_position_vbox");
    that.css.addClass("wui_position_flex");
    that.setText = function(text) {
        that.getDomElement().innerHTML = text;
    };
    that.show = function() {
        that.getDomElement().style.display = '-webkit-box';
    };
    return that;
};/*
 * A basic scroll panel.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *  wui_controls_panels.js
 *  wui_controls_panels_standard.js
 *  lib/iscroll/iscroll-3.7.1.js
 *
 *  wui.css
 *  target/controls/wui_panel.css
 */
wui.controls.panels.scroll = function() {
    var that = wui.controls.control();
    var id = "scroll__" + that.getControlNumber();
    that.css.addClass("wui_position_flex");
    that.setId(id);
 
    var scroller =  wui.controls.panels.standard();
    that.appendControl(scroller);
	var mainDiv = that.getDomElement();
    that.scroll = new iScroll(scroller.getDomElement(), {
        desktopCompatibility: true
    });

    that.setText = function(text) {
        scroller.setText("<ul><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>"+text+"</li></ul>");
        that.scroll.refresh();
    };
    that.appendControl= function(control) {
        scroller.getDomElement().appendChild(control.getDomElement());
    };
    that.show = function() {
        that.getDomElement().style.display = 'block';
        that.scroll.refresh();
    };
    that.scroll.refresh();

	// Prevent other parts of the page from being draggable
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    },
    false);

    that.clear = function() {
        scroller.getDomElement().innerHTML = "";
    };
    that.getDomElement = function() {
        return mainDiv;
    };
    return that;
};/*
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
}; /*
 * This is the menu namespace
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
 wui.controls.menu = {};wui.controls.menu.menuItem = function() {
    var that = wui.controls.control("span");
    that.css.addClass("wui_position_flex");
    that.css.addClass("wui_control_menuItem");
    var icon = wui.controls.control();
    icon.css.addClass("wui_control_menuItem_icon");
    var selected = false;
    var panelControl;
    var normalIcon = "";
    var selectedIcon = "";
    var a = wui.controls.control("a");
    that.setText = function(text) {
        a.getDomElement().innerHTML = text;
    };
    that.setPanel = function(panel) {
        panelControl = panel;
    };
    that.showPanel = function() {
        if (panelControl) {
            panelControl.show();
        }
    };
    that.hidePanel = function() {
        if (panelControl) {
            panelControl.hide();
        }
    };
    that.setIconControl = function(text) {
        normalIcon = text;
        if (!selected) {
            icon.getDomElement().innerHTML = normalIcon;
        }
    };
    that.setSelectedIconControl = function(text) {
        selectedIcon = text;
    };
    that.select = function() {
        if (selectedIcon.length > 1) {
            icon.getDomElement().innerHTML = selectedIcon;
        }
        selected = true;
        that.css.addClass("wui_control_menuItem_active");
        that.showPanel();
    };
    that.deselect = function() {
        icon.getDomElement().innerHTML = normalIcon;
        selected = false;
        that.css.removeClass("wui_control_menuItem_active");
        that.hidePanel();
    };
    that.show = function() {
        that.getDomElement().style.display = '-webkit-box';
    };
    that.appendControl(icon);
    that.appendControl(a);
    return that;
};
 /*
 * Create a menubar
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_menu.js
 * 
 *  wui_menuBar.css
 */
wui.controls.menu.menuBar = function() {
    var that = wui.controls.control("nav");
    var items = [];
    var i;
    that.css.addClass("wui_position_hbox");
    that.css.addClass("wui_control_menuBar");

    that.setActive = function(menuItem) {
        for (i = 0; i < items.length; i++) {
            items[i].deselect();
        }
        menuItem.select();
    };
    
    that.menuItems = (function() {
        var add = function(menuItem) {
            menuItem.setOnClick( function() {
                that.setActive(menuItem);
            });
            items.push(menuItem);
            that.appendControl(menuItem);
        };
        return{
            add: add
        };
    }());
    
    return that;
};