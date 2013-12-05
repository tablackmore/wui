gsnamnd.app = function () {
    var that = wui.controls.app();

    // The list panel
    that.listPanel = gsnamnd.controls.listPanel();
    // The map panel
    that.mapPanel = wui.controls.panels.standard();
    that.mapPanel.titlebar = wui.controls.titleBar();
    that.mapPanel.titlebar.setText("Map");
    that.mapPanel.mainPanel = wui.controls.panels.scroll();

    that.mapPanel.appendControl(that.mapPanel.titlebar);
    that.mapPanel.appendControl(that.mapPanel.mainPanel);

    // create a menubar
    that.menuBar = wui.controls.menu.menuBar();

    var listMenuItem = wui.controls.menu.menuItem();
    listMenuItem.setIconControl("&#xe094;");
    listMenuItem.setSelectedIconControl("&#xe094;");
    listMenuItem.setText("list");
    listMenuItem.setPanel(that.listPanel);

    var mapMenuItem = wui.controls.menu.menuItem();
    mapMenuItem.setIconControl("&#xe089;");
    mapMenuItem.setSelectedIconControl("&#xe089;");
    mapMenuItem.setText("map");
    mapMenuItem.setPanel(that.mapPanel);

    that.menuBar.items.add(listMenuItem);
    that.menuBar.items.add(mapMenuItem);

    that.menuBar.setActive(listMenuItem);

    that.appendControl(that.listPanel);
    that.appendControl(that.mapPanel);
    that.appendControl(that.menuBar);
    return that;
};