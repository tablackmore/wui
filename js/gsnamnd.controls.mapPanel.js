gsnamnd.controls.mapPanel = function () {
    var that = wui.controls.panels.standard();

    that.titlebar = wui.controls.titleBar();
    that.titlebar.setText("Map");

    that.mainPanel = wui.controls.panels.scroll();

    that.appendControl(that.titlebar);
    that.appendControl(that.mainPanel);
    return that;
};