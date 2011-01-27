wui.controls = (function(){
    
    /**
     * A generic control
     */
    var control = (function(){
        var count = 0;
        return function(type){
            var idNumber = count;
            count += 1;
            var elementName = type ? type: "div";
            var mainDiv = document.createElement(elementName);

            var show = function(){
                mainDiv.style.display = 'block';
            };

            var hide = function(){
                mainDiv.style.display = 'none';
            };

            var toggle = function(){
                if (mainDiv.style.display === 'none'){
                    show();
                } else{
                    hide();
                }
            };

            var getControlNumber = function(){
                return idNumber;
            };

            var setOnClick = function(fn){
                mainDiv.onclick = fn;
            };

            var setClass = function(text){
                mainDiv.className = text;
            };

            var setWidth = function(width){
                mainDiv.style.width = width;
            };

            var setHeight = function(height){
                mainDiv.style.height = height;
            };

            var setId = function(text){
                mainDiv.id = text;
            };
            
            var appendControl = function(control){
              mainDiv.appendChild(control.getElement());
            }
            
            var getElement = function(){
              return mainDiv;
            };

            return{
                getElement: getElement,
                getControlNumber: getControlNumber,
                appendControl: appendControl,
                show: show,
                hide: hide,
                toggle: toggle,
                setWidth: setWidth,
                setHeight: setHeight,
                setOnClick: setOnClick,
                setClass: setClass,
                setId: setId
            };
        };
    })();
    
    var app = function(){
      var that =control();
      that.setClass("app");
      return that;
    };

    // create a button
    var buttons = (function(){
        var button = function(){
            var that = control();
            that.setText = function(text){
                that.getElement().innerHTML = text;
            };
            that.click = function(){
                var ev = document.createEvent('MouseEvents');
                ev.initEvent('click', true, true);
                that.getElement().dispatchEvent(ev);
            };
            return that;
        };

        var normal = function(){
            var that = button();
            that.setClass("buttonNormal");
            return that;
        };

        var red = function(){
            var that = button();
            that.setClass("buttonRed");
            return that;
        };

        var back = function(){
            var that = button();
            that.setClass("buttonBack");
            return that;
        };

        var add = function(){
            var that = button();
            that.setClass("buttonAdd");
            that.setText("+");
            return that;
        };

        var greyLamp = function(){
            var that = button();
            that.setClass("buttonGreyLamp");
            return that;
        };

        var greenLamp = function(){
            var that = button();
            that.setClass("buttonGreenLamp");
            return that;
        };

        var orangeLamp = function(){
            var that = button();
            that.setClass("buttonOrangeLamp");
            return that;
        };

        var redLamp = function(){
            var that = button();
            that.setClass("buttonRedLamp");
            return that;
        };

        return{
            normal: normal,
            red: red,
            back: back,
            add: add,
            greyLamp: greyLamp,
            greenLamp: greenLamp,
            orangeLamp: orangeLamp,
            redLamp: redLamp
        };
    })();

    // titleBar 
    var titleBar = function(){
        var title;
        var that = control();
        var mainDiv = that.getElement();
        that.show = function(){
            that.getElement().style.display = "-webkit-box";
        };
        that.setClass("titleBar");
        var heading = document.createElement("h1");
        heading.className = "flex";

        that.setText = function(text){
            heading.innerHTML = text;
        };

        var rightContainer = control();
        rightContainer.setClass("rightTitlebarContainer");

        var leftContainer = control();
        leftContainer.setClass("leftTitlebarContainer");

        that.rightContainer = (function(){

            var addElement = function(element){
                rightContainer.getElement().appendChild(element);
            };

            var clear = function(){
                rightContainer.getElement().innerHTML = "";
            };

            return{
                addElement: addElement,
                clear: clear
            };
        })();

        that.leftContainer = (function(){

            var addElement = function(element){
                leftContainer.getElement().appendChild(element);
            };

            var clear = function(){
                leftContainer.getElement().innerHTML = "";
            };
            return{
                addElement: addElement,
                clear: clear
            };
        })();

        mainDiv.appendChild(leftContainer.getElement());
        mainDiv.appendChild(heading);
        mainDiv.appendChild(rightContainer.getElement());
        return that;
    };

    var panel = function(){
        var that = control();
        that.setClass("panel");
        that.setText = function(text){
            that.getElement().innerHTML = text;
        };
        that.show = function(){
            that.getElement().style.display = '-webkit-box';
        };
        return that;
    };

    var scrollablePanel = function(){
        var that = panel();
        var id = "scroll__" + that.getControlNumber();
        that.setClass("scrollPanel");
        that.setId(id);
        that.getElement().style.display = 'block';
        var mainDiv = that.getElement();
        var scroller = panel();
        var loaded = false;
        var funcQueue = [];
        that.setText = function(text){
            scroller.setText(text);
        };
        that.appendControl= function(control){
          
            var add = function(){
                scroller.getElement().appendChild(control.getElement());
            };
            if (loaded){
                add();
            } else{
                funcQueue.push(add);
            }
        };
        that.show = function(){
            that.getElement().style.display = 'block';
            var refresh = function(){
                that.scroll.refresh();
            };
            if (loaded){
                refresh();
            } else{
                funcQueue.push(refresh);
            }
        };
        mainDiv.appendChild(scroller.getElement());
        //stops the whole page being draggable
        document.addEventListener('touchmove',
        function(e){
            e.preventDefault();
        },
        false);
        wui.misc.script.loadScript("../lib/iscroll/iscroll-3.7.1.js",
        function(){
            that.scroll = new iScroll(scroller.getElement(), {
                desktopCompatibility: true
            });
            for (var i = funcQueue.length - 1; i >= 0; i--){
                funcQueue[i]();
                wui.misc.array.remove(funcQueue, i);
            }
            loaded = true;
            that.scroll.refresh();
        });

        that.clear = function(){
            scroller.getElement().innerHTML = "";
        };

        that.getElement = function(){
            return mainDiv;
        };

        return that;
    };

    var lists = (function(){
        var listItem = function(text){
            var that = control("li");
            that.setText = function(text){
                that.getElement().innerHTML = text;
            };

            if (typeof text !== "undefined"){
                that.setText(text);
            }
            return that;
        };
        var arrowListItem = function(text){
            var that = listItem("li");
            that.getElement().innerHTML = "";
            that.setClass("hbox");
            var textDiv = control("div");
            textDiv.setClass("flex");
            var imgElement = control("div");
            imgElement.setClass("arrowLeft");
            that.setText = function(text){
                textDiv.getElement().innerHTML = text;
            };
            if (typeof text !== "undefined"){
                that.setText(text);
            }
            var mainElement = that.getElement();

            that.getElement = function(){
                mainElement.appendChild(textDiv.getElement());
                mainElement.appendChild(imgElement.getElement());
                return mainElement;
            };
            return that;
        };

        var fullScreen = function(){
            var that = control("ul");
            that.setClass("fullMenu");
            that.addItem = function(listItem){
                that.getElement().appendChild(listItem.getElement());
            };
            that.clear = function(){
                that.getElement().innerHTML = "";
            };
            return that;
        };
        var rounded = function(){
            var that = fullScreen();
            that.setClass("roundedMenu");
            return that;
        };
        return{
            listItem: listItem,
            arrowListItem: arrowListItem,
            fullScreen: fullScreen,
            rounded: rounded
        };
    })();

    var menu = (function(){
        var menuTab = function(){
            var that = control("span");
            var icon = control();
            icon.setClass("menuIcon");
            var selected = false;

            var normalIcon = "";
            var selectedIcon = "";

            var a = document.createElement("a");
            var mainDiv = that.getElement();
            var panelControl;

            that.setText = function(text){
                a.innerHTML = text;
            };

            that.setPanel = function(panel){
                panelControl = panel;
            };

            that.showPanel = function(){
                if (panelControl){
                    panelControl.show();
                }
            };

            that.hidePanel = function(){
                if (panelControl){
                    panelControl.hide();
                }
            };

            that.setIcon = function(text){
                normalIcon = text;
                if (!selected){
                    icon.getElement().innerHTML = normalIcon;
                }
            };

            that.setSelectedIcon = function(text){
                selectedIcon = text;
            };

            that.select = function(){
                if (selectedIcon.length > 1){
                    icon.getElement().innerHTML = selectedIcon;
                }
                selected = true;
                that.setClass("menuActive");
                that.showPanel();
            };

            that.deselect = function(){
                icon.getElement().innerHTML = normalIcon;
                selected = false;
                that.setClass("");
                that.hidePanel();
            };


            that.getElement = function(){
                mainDiv.appendChild(icon.getElement());
                mainDiv.appendChild(a);
                return mainDiv;
            };

            that.show = function(){
                that.getElement().style.display = '-webkit-box';
            };

            return that;
        };

        // create a menu bar 
        var menuBar = function(){
            var that = control();
            var mainDiv = that.getElement();
            that.setClass("menuBar");
            var tabs = [];

            that.setActive = function(tab){
                for (var i = 0; i < tabs.length; i++){
                    tabs[i].deselect();
                }
                tab.select();
            };

            that.menuTabs = (function(){
                var addTab = function(tab){
                    tab.setOnClick(function(){
                        that.setActive(tab);
                    });
                    tabs.push(tab);
                };
                return{
                    addTab: addTab
                };
            })();

            that.getElement = function(){
                mainDiv.innerHTML = "";
                for (var i = 0; i < tabs.length; i++){
                    mainDiv.appendChild(tabs[i].getElement());
                }
                return mainDiv;
            };
            return that;
        };

        return{
            menuTab: menuTab,
            menuBar: menuBar
        };
    })();
    return{
        control: control,
        app: app,
        titleBar: titleBar,
        panel: panel,
        menu: menu,
        buttons: buttons,
        scrollablePanel: scrollablePanel,
        lists: lists
    };
})();