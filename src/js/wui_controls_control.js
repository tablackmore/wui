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
}());