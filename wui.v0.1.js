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
 */
var wui = {};
/*
 * Dependencies: 
 *  wui.js
 * 
 */
wui.controls = {};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 *
 * This is the very simple base object for building all other controls
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *
 */
wui.controls.control = (function () {
    "use strict";
    var count = 0;
    return function (type) {
        var show, hide, toggle, getControlNumber, setId, getDomElement, appendControl, setOnClick, click, css, idNumber = count,
            elementName = type || "div",
            mainElement = document.createElement(elementName);
        count += 1;
        show = function () {
            mainElement.style.display = 'block';
        };
        hide = function () {
            mainElement.style.display = 'none';
        };
        toggle = function () {
            if (mainElement.style.display === 'none') {
                show();
            } else {
                hide();
            }
        };
        getControlNumber = function () {
            return idNumber;
        };
        setOnClick = function (fn) {
            if (typeof document.ontouchstart === "object") {
                mainElement.ontouchstart = fn;
            } else {
                mainElement.onclick = fn;
            }
        };
        click = function () {
            var ev = document.createEvent('MouseEvents');
            ev.initEvent('click', true, true);
            ev.initEvent('touchstart', true, true);
            mainElement.dispatchEvent(ev);
        };
        css = (function () {
            var updateElement, toggleClass, addClass, removeClass, clear, classes = [];
            updateElement = function () {
                var i, result = "";
                for (i = 0; i < classes.length; i = i + 1) {
                    result += classes[i] + " ";
                }
                mainElement.className = result;
            };
            toggleClass = function (className) {
                var i, exists = false;
                for (i = 0; i < classes.length; i = i + 1) {
                    if (className === classes[i]) {
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    addClass(className);
                } else {
                    removeClass(className);
                }
            };
            addClass = function (className) {
                var i, exists = false;
                for (i = 0; i < classes.length; i = i + 1) {
                    if (className === classes[i]) {
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    classes.push(className);
                    updateElement();
                }
            };
            removeClass = function (className) {
                var i, newClasses = [],
                    deleted = false;
                for (i = 0; i < classes.length; i = i + 1) {
                    if (className !== classes[i]) {
                        newClasses.push(classes[i]);
                    }
                }
                classes = newClasses;
                updateElement();
            };
            clear = function (className) {
                classes = [];
                updateElement();
            };
            return {
                addClass: addClass,
                removeClass: removeClass,
                toggleClass: toggleClass,
                clear: clear
            };
        }());
        setId = function (text) {
            mainElement.id = text;
        };
        getDomElement = function () {
            return mainElement;
        };
        appendControl = function (control) {
            mainElement.appendChild(control.getDomElement());
        };
        return {
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
}());/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
wui.controls.progress = function () {
	"use strict";
	var that = wui.controls.control();
	that.setText = function (text) {
		that.getDomElement().innerHTML = text;
	};
	that.css.addClass("wui_control_progress");
	that.hide();
	return that;
};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *  wui.css
 *
 */
wui.controls.app = function () {
	"use strict";
	var that = wui.controls.control();
	that.css.addClass("wui_position_vbox");
	that.css.addClass("wui_position_fullscreen");
	that.show = function () {
		that.getDomElement().style.display = '-webkit-box';
	};
	return that;
}; /*
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
 wui.controls.panels = {};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A basic panel.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *  wui_controls_panels.js
 *
 *  wui.css
 */
wui.controls.panels.standard = function () {
    "use strict";
    var that = wui.controls.control();
    that.css.addClass("wui_controls_panel");
    that.css.addClass("wui_position_vbox");
    that.css.addClass("wui_position_flex");
    that.setText = function (text) {
        that.getDomElement().innerHTML = text;
    };
    that.show = function () {
        that.getDomElement().style.display = '-webkit-box';
    };
    return that;
};/*jslint browser:true */
/*global iScroll: false, wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A basic scroll panel.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *  wui_controls_panels.js
 *  wui_controls_panels_standard.js
 *  lib/iscroll/iscroll-lite.js
 *
 *  wui.css
 *  wui_controls_panels_panel.css
 */
wui.controls.panels.scroll = function () {
    "use strict";
    var that = wui.controls.control(),
        id = "scroll__" + that.getControlNumber(),
        scroller = wui.controls.panels.standard(),
        mainDiv = that.getDomElement();
    that.css.addClass("wui_position_flex");
    that.setId(id);
    that.appendControl(scroller);
    that.scroll = new iScroll(that.getDomElement(), {
        onBeforeScrollStart: function (e) {
            var target = e.target;
            while (target.nodeType !== 1) {
                target = target.parentNode;
            }
            if (target.tagName !== 'SELECT' && target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
                e.preventDefault();
            }
        }
    });
    that.setText = function (text) {
        scroller.setText(text);
        that.scroll.refresh();
    };
    that.appendControl = function (control) {
        scroller.getDomElement().appendChild(control.getDomElement());
        that.scroll.refresh();
    };
    that.show = function () {
        that.getDomElement().style.display = 'block';
        that.scroll.refresh();
    };
    that.scroll.refresh();
    // Prevent other parts of the page from being draggable
    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);
    that.clear = function () {
        scroller.getDomElement().innerHTML = "";
        that.scroll.refresh();
    };
    that.getDomElement = function () {
        return mainDiv;
    };
    return that;
}; /*
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
 wui.controls.lists = {}; /*
 * This is the list items namespace
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 */
wui.controls.lists.items = {};
/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * This is the standard listItem
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 *
 *  wui_controls_lists_standard.css
 */
wui.controls.lists.items.standard = function (text) {
	"use strict";
	var that, mainElement;
	that = wui.controls.control("li");
	mainElement = that.getDomElement();
	that.setText = function (text) {
		mainElement.innerHTML = text;
	};
	if (typeof text !== "undefined") {
		that.setText(text);
	}
	that.setOnClick = function (fn) {
		mainElement.onclick = fn;
	};
	that.click = function () {
		var ev = document.createEvent('MouseEvents');
		ev.initEvent('click', true, true);
		mainElement.dispatchEvent(ev);
	};
	return that;
};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * This is the standard listItem
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 *  wui_controls_lists_items.js
 */
wui.controls.lists.items.arrow = function (text) {
    "use strict";
    var that, textDiv, imgElement, mainElement;
    that = wui.controls.control("li");
    that.css.addClass("wui_position_hbox");
    textDiv = wui.controls.control("div");
    textDiv.css.addClass("wui_position_flex");
    imgElement = wui.controls.control("div");
    imgElement.css.addClass("wui_controls_lists_items_arrow_icon");
    mainElement = that.getDomElement();
    that.setText = function (text) {
        textDiv.getDomElement().innerHTML = text;
    };
    if (typeof text !== "undefined") {
        that.setText(text);
    }
    that.setOnClick = function (fn) {
        mainElement.onclick = fn;
    };
    that.click = function () {
        var ev = document.createEvent('MouseEvents');
        ev.initEvent('click', true, true);
        mainElement.dispatchEvent(ev);
    };
    that.appendControl(textDiv);
    that.appendControl(imgElement);
    return that;
};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * This is a standard list
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 */
wui.controls.lists.standard = function () {
    "use strict";
    var that = wui.controls.control("ul");
    that.css.addClass("wui_controls_lists_standard");
    that.items = (function () {
        var add = function (listItem) {
                that.appendControl(listItem);
            };
        return {
            add: add
        };
    }());
    that.clear = function () {
        that.getDomElement().innerHTML = "";
    };
    return that;
};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * This is a rounded list
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_lists.js
 *
 *  wui_controls_lists_rounded.css
 */
wui.controls.lists.rounded = function () {
	"use strict";
	var that = wui.controls.lists.standard();
	that.css.addClass("wui_controls_lists_rounded");
	return that;
};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A basic titlebar with three containers.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *
 *  wui.css
 *  wui_controls_titlebar.css
 */
wui.controls.titleBar = function () {
    "use strict";
    var that = wui.controls.control("header"),
        mainDiv = that.getDomElement(),
        title = document.createElement("h1");
    that.rightContainer = wui.controls.control();
    that.leftContainer = wui.controls.control();
    title.className = "wui_position_flex wui_controls_titleBar_title";
    that.css.addClass("wui_position_hbox");
    that.css.addClass("wui_controls_titleBar");
    that.rightContainer.css.addClass("wui_controls_titleBar_rightContainer");
    that.leftContainer.css.addClass("wui_controls_titleBar_leftContainer");
    that.show = function () {
        that.getDomElement().style.display = "-webkit-box";
    };
    that.setText = function (text) {
        title.innerHTML = text;
    };
    mainDiv.appendChild(that.leftContainer.getDomElement());
    mainDiv.appendChild(title);
    mainDiv.appendChild(that.rightContainer.getDomElement());
    return that;
};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A basic titlebar with three containers.
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_control.js
 *
 *  wui.css
 *  wui_controls_titlebar.css
 */
wui.controls.toolBar = function () {
    "use strict";
    var that = wui.controls.control(),
        mainDiv = that.getDomElement();
    that.css.addClass("wui_position_hbox");
    that.css.addClass("wui_controls_toolBar");
    that.leftContainer = wui.controls.control();
    that.middleContainer = wui.controls.control();
    that.rightContainer = wui.controls.control();
    that.leftContainer.css.addClass("wui_controls_toolBar_container");
    that.leftContainer.css.addClass("wui_position_flex");
    that.middleContainer.css.addClass("wui_controls_toolBar_container");
    that.middleContainer.css.addClass("wui_position_flex");
    that.rightContainer.css.addClass("wui_controls_toolBar_container");
    that.rightContainer.css.addClass("wui_position_flex");
    that.show = function () {
        that.getDomElement().style.display = "-webkit-box";
    };
    mainDiv.appendChild(that.leftContainer.getDomElement());
    mainDiv.appendChild(that.middleContainer.getDomElement());
    mainDiv.appendChild(that.rightContainer.getDomElement());
    return that;
}; /*
 *   Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
 wui.controls.menu = {};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * Create a menuItem to load in a menuBar
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_menu.js
 *
 *  wui_controls_menu_menuItem.css
 */
wui.controls.menu.menuItem = function () {
    "use strict";
    var panelControl, that = wui.controls.control("span"),
        icon = wui.controls.control(),
        selected = false,
        normalIcon = "",
        selectedIcon = "",
        a = wui.controls.control("a");
    that.css.addClass("wui_position_flex");
    that.css.addClass("wui_control_menuItem");
    icon.css.addClass("wui_control_menuItem_icon");
    that.setText = function (text) {
        a.getDomElement().innerHTML = text;
    };
    that.setPanel = function (panel) {
        panelControl = panel;
    };
    that.getPanel = function () {
        return panelControl;
    };
    that.showPanel = function () {
        if (panelControl) {
            panelControl.show();
        }
    };
    that.hidePanel = function () {
        if (panelControl) {
            panelControl.hide();
        }
    };
    that.setIconControl = function (text) {
        normalIcon = text;
        if (!selected) {
            icon.getDomElement().innerHTML = normalIcon;
        }
    };
    that.setSelectedIconControl = function (text) {
        selectedIcon = text;
    };
    that.select = function () {
        if (selectedIcon.length > 1) {
            icon.getDomElement().innerHTML = selectedIcon;
        }
        selected = true;
        that.css.addClass("wui_control_menuItem_active");
        that.showPanel();
    };
    that.deselect = function () {
        icon.getDomElement().innerHTML = normalIcon;
        selected = false;
        that.css.removeClass("wui_control_menuItem_active");
        that.hidePanel();
    };
    that.show = function () {
        that.getDomElement().style.display = '-webkit-box';
    };
    that.appendControl(icon);
    that.appendControl(a);
    return that;
};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * Create a menubar
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_menu.js
 *
 *  wui_controls_menu_menuBar.css
 */
wui.controls.menu.menuBar = function () {
    "use strict";
    var activeItem, that = wui.controls.control("nav"),
        items = [];
    that.css.addClass("wui_position_hbox");
    that.css.addClass("wui_control_menuBar");
    that.setActive = function (menuItem) {
        var i;
        for (i = 0; i < items.length; i = i + 1) {
            items[i].deselect();
        }
        menuItem.select();
        activeItem = menuItem;
    };
    that.getActive = function () {
        return activeItem;
    };
    that.items = (function () {
        var add = function (menuItem) {
                menuItem.setOnClick(function () {
                    that.setActive(menuItem);
                });
                items.push(menuItem);
                that.appendControl(menuItem);
            };
        return {
            add: add
        };
    }());
    return that;
}; /*
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
wui.controls.buttons = {};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A standard button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *
 *  wui_controls_buttons_standard.css
 */
wui.controls.buttons.standard = function () {
    "use strict";
    var that = wui.controls.control();
    that.setText = function (text) {
        that.getDomElement().innerHTML = text;
    };
    that.css.addClass("wui_controls_buttons_standard");
    return that;
};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A red button button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *
 *  wui_controls_buttons_standard.css
 *  wui_controls_buttons_red.css
 */
wui.controls.buttons.red = function () {
	"use strict";
	var that = wui.controls.buttons.standard();
	that.css.addClass("wui_controls_buttons_red");
	return that;
};/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * An add button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *  wui_controls_buttons_add.css
 */
wui.controls.buttons.add = function () {
	"use strict";
	var that = wui.controls.buttons.standard();
	that.css.clear();
	that.css.addClass("wui_controls_buttons_add");
	that.setText("+");
	that.setText = undefined;
	return that;
};/*jslint browser:true */
/*global wuid: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A simple back button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *
 *  wui_controls_buttons_back.css
 */
wui.controls.buttons.back = function () {
	"use strict";
	var that = wui.controls.buttons.standard();
	that.css.clear();
	that.css.addClass("wui_controls_buttons_back");
	return that;
};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A round grey lamp button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *
 *  wui_controls_buttons_greyLamp.css
 */
wui.controls.buttons.greyLamp = function () {
	"use strict";
	var that = wui.controls.buttons.standard();
	that.css.clear();
	that.css.addClass("wui_controls_buttons_greyLamp");
	return that;
};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A round green lamp button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *  wui_controls_buttons_greyLamp.js
 *
 *  wui_controls_buttons_greyLamp.css
 *  wui_controls_buttons_greenLamp.css
 */
wui.controls.buttons.greenLamp = function () {
	"use strict";
	var that = wui.controls.buttons.greyLamp();
	that.css.addClass("wui_controls_buttons_greenLamp");
	return that;
};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A round orange lamp button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *  wui_controls_buttons_greyLamp.js
 *
 *  wui_controls_buttons_greyLamp.css
 *  wui_controls_buttons_orangeLamp.css
 */
wui.controls.buttons.orangeLamp = function () {
	"use strict";
	var that = wui.controls.buttons.greyLamp();
	that.css.addClass("wui_controls_buttons_orangeLamp");
	return that;
};/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * A round red lamp button
 * Dependencies:
 *  wui.js
 *  wui_controls.js
 *  wui_controls_buttons.js
 *  wui_controls_buttons_standard.js
 *  wui_controls_buttons_greyLamp.js
 *
 * 	wui_controls_buttons_greyLamp.css
 *  wui_controls_buttons_redLamp.css
 */
wui.controls.buttons.redLamp = function () {
	"use strict";
	var that = wui.controls.buttons.greyLamp();
	that.css.addClass("wui_controls_buttons_redLamp");
	return that;
};