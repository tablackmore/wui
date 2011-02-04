wui.controls.menu.menuItem = function() {
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
