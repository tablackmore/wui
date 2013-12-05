/*
 */
var wui = {};

/*
 * Dependencies: 
 *  wui.js
 * 
 */
wui.controls = {};
/*jslint browser:true */
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
                mainElement.ontouchstart = function (e) {
                    e.cancelBubble = true;
                    e.stopPropagation();
                    fn();
                };
            } else {
                mainElement.onclick = function (e) {
                    e.cancelBubble = true;
                    e.stopPropagation();
                    fn();
                };
            }
        };
        click = function () {
            var ev = document.createEvent('MouseEvents');
            if (typeof document.ontouchstart === "object") {
                ev.initEvent('touchstart', true, true);
            } else {
                ev.initEvent('click', true, true);
            }
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
}());
/*jslint browser:true */
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
        that.getDomElement().style.display = PrefixFree.prefix + 'box';
    };
    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);
    return that;
};
 /*
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
wui.controls.buttons = {};
/*jslint browser:true */
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
    var that = wui.controls.control(),
        symbol = wui.controls.control("span");
    symbol.css.addClass("wui_symbol");
    that.appendControl(symbol);
    that.setText = function (text) {
        var textNode;
        if (text.length > 0) {
            textNode = document.createTextNode(text);
            that.getDomElement().innerHTML = "";
            that.getDomElement().appendChild(symbol.getDomElement());
            that.getDomElement().appendChild(textNode);
        } else {
            that.getDomElement().innerHTML = "";
            that.getDomElement().appendChild(symbol.getDomElement());
        }
    };
    that.setSymbol = function (text) {
        symbol.getDomElement().innerHTML = text;
    };
    that.css.addClass("wui_controls_button");
    return that;
};
/*jslint browser:true */
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
	that.setSymbol("+");
	that.css.addClass("wui_controls_buttons_add");
	return that;
};
/*jslint browser:true */
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
	that.setSymbol("<");
	that.css.addClass("wui_controls_buttons_back");
	return that;
};
/*jslint browser:true */
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
};
/*jslint browser:true */
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
};
/*jslint browser:true */
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
};
/*jslint browser:true */
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
};
/*jslint browser:true */
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
 /*
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
 wui.controls.lists = {};
 /*
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
};
/*jslint browser:true */
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
};
/*jslint browser:true */
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
};
/*jslint browser:true */
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
};
 /*
 *   Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
 wui.controls.menu = {};
/*jslint browser:true */
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
};
/*jslint browser:true */
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
        that.getDomElement().style.display = PrefixFree.prefix + 'box';
    };
    that.appendControl(icon);
    that.appendControl(a);
    return that;
};
 /*
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 */
 wui.controls.panels = {};
/*jslint browser:true */
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
wui.controls.panels.iscroll = function () {
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
};
wui.controls.panels.scroll = function () {
    "use strict";
    var that = wui.controls.panels.standard(),
        mainDiv = that.getDomElement();
    that.css.addClass("wui_controls_scroll");
    // To enable scrolling even if it has been switched off elsewhere

    mainDiv.addEventListener('touchstart', function (event) {
        this.allowUp = (this.scrollTop > 0);

        this.allowDown = (this.scrollTop <= this.scrollHeight - this.clientHeight);
        this.prevTop = null;
        this.prevBot = null;
        this.lastY = event.pageY;
    });

    mainDiv.addEventListener('touchmove', function (event) {
        var up = (event.pageY > this.lastY),
            down = !up;
        this.lastY = event.pageY;

        if ((up && this.allowUp) || (down && this.allowDown)) {
            event.stopPropagation();
        } else {
            event.preventDefault();
        }
    });

    return that;
};
/*jslint browser:true */
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
        that.getDomElement().style.display = PrefixFree.prefix + 'box';
    };
    return that;
};
/*jslint browser:true */
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
};
/*jslint browser:true */
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
        that.getDomElement().style.display = PrefixFree.prefix + 'box';
    };
    that.setText = function (text) {
        title.innerHTML = text;
    };
    mainDiv.appendChild(that.leftContainer.getDomElement());
    mainDiv.appendChild(title);
    mainDiv.appendChild(that.rightContainer.getDomElement());
    return that;
};
/*jslint browser:true */
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
        that.getDomElement().style.display = PrefixFree.prefix + 'box';
    };
    mainDiv.appendChild(that.leftContainer.getDomElement());
    mainDiv.appendChild(that.middleContainer.getDomElement());
    mainDiv.appendChild(that.rightContainer.getDomElement());
    return that;
};
/*jslint browser:true */
/*global wui: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*
 * Miscellaneous functions for helping out in times of trouble
 */
wui.misc = (function () {
    "use strict";
    var script, array;
    array = (function () {
        // Array Remove - By John Resig (MIT Licensed)
        // can remove as simply as remove(index); where index is index of array 
        // element to remove
        var remove, binarySearch;
        remove = function (array, from, to) {
            var rest = array.slice((to || from) + 1 || array.length);
            array.length = from < 0 ? array.length + from : from;
            return array.push.apply(array, rest);
        };
        /*      A binary search function for arrays.
         *      array : array to search
         *      find : the item to find
         *      compareFn : a compare function that takes argument
         *                  (array[i], find)
         *                  returns 0 when they are equal
         *                  returns -1 when the a is less than b
         *                  returns +1 when the a is greater than b
         *                  e.g. Compare strings:
         *                  function(a,b){ return (a===b)?0:(a>b)?1:-1; }
         *                  Compare numbers:
         *                  function(a,b){return a - b;}
         */
        binarySearch = function (array, find, compareFn) {
            var i, comparison, low = 0,
                high = array.length - 1;
            while (low <= high) {
                i = parseInt((low + high) / 2, 10);
                comparison = compareFn(array[i], find);
                if (comparison < 0) {
                    low = i + 1;
                    continue;
                }
                if (comparison > 0) {
                    high = i - 1;
                    continue;
                }
                return i;
            }
            return null;
        };
        return {
            remove: remove,
            binarySearch: binarySearch
        };
    }());
    script = (function () {
        /*
         * Public method to load external scripts
         *
         *      src:        url to script
         *      timeOut:    remove script after certain time. (null if we
         *                  shouldn't remove)
         *      callback:   callback method that will fire when the script is
         *                  loaded.
         */
        var jsonpLoader, loadScript;
        loadScript = (function () {
            var loadedScripts = [];
            return function (src, callback, timeOut) {
                //console.log(src, timeOut,callback);
                var i, removeCurrentScript, s, loaded = false;
                for (i = 0; i < loadedScripts.length; i = i + 1) {
                    if (loadedScripts[i] === src) {
                        loaded = true;
                        break;
                    }
                }
                if (!loaded) {
                    s = document.createElement("script");
                    s.src = src;
                    s.id = src;
                    s.type = "text/javascript";
                    s.onload = function () {
                        if (callback) {
                            callback();
                            loadedScripts.push(src);
                        }
                    };
                    document.getElementsByTagName('head')[0].appendChild(s);
                    if (timeOut) {
                        removeCurrentScript = function () {
                            var eltScript = document.getElementById(src);
                            eltScript.parentNode.removeChild(eltScript);
                        };
                        setTimeout(removeCurrentScript, timeOut);
                    }
                } else {
                    if (callback) {
                        callback();
                    }
                }
            };
        }());
        jsonpLoader = (function () {
            var id = 0; // Keep track of the number of times we call this function
            return function (url, callback) {
                var thisId = id,
                    s = document.createElement("script"),
                    separator = url.indexOf('?') > 0 ? "&" : "?";
                window["jsonp" + thisId] = function (data) {
                    if (callback) {
                        callback(data);
                    }
                };
                s.src = url + separator + "callback=" + "jsonp" + thisId;
                s.type = "text/javascript";
                s.onload = function () {
                    //when everything is loaded tidy up, 
                    //clear our unique global function
                    window["jsonp" + thisId] = undefined;
                    document.getElementsByTagName('head')[0].removeChild(s);
                };
                //add the script tag to the head section
                document.getElementsByTagName('head')[0].appendChild(s);
                id = id + 1; // Generate  unique number for the request
            };
        }());
        return {
            loadScript: loadScript,
            jsonpLoader: jsonpLoader
        };
    }());
    return {
        script: script,
        array: array
    };
}());