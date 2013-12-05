/*
    The code below creates a menubar at the bottom of the page with 2 items in that link to two panels.
    One alled mapPanel that is defined in gsnamnd.controls.mapPanel.js and 
    One called listPanel that contains a list and is created in gsnamnd.controls.listPanel.js
 */
gsnamnd.app = function () {
    var listMenuItem, mapMenuItem,
        that = wui.controls.app();
    // Create the custom panels
    that.listPanel = gsnamnd.controls.listPanel();
    that.mapPanel = gsnamnd.controls.mapPanel();

    // Create a menubar
    that.menuBar = wui.controls.menu.menuBar();

    // Create the two mu items and wire them up to panels
    listMenuItem = wui.controls.menu.menuItem();
    listMenuItem.setIconControl("&#xe094;");
    listMenuItem.setSelectedIconControl("&#xe094;");
    listMenuItem.setText("list");
    listMenuItem.setPanel(that.listPanel); // Connect the menu button to a panel

    mapMenuItem = wui.controls.menu.menuItem();
    mapMenuItem.setIconControl("&#xe089;");
    mapMenuItem.setSelectedIconControl("&#xe089;");
    mapMenuItem.setText("map");
    mapMenuItem.setPanel(that.mapPanel);

    // Add the menu items to the menubar and set which one should be active on landing
    that.menuBar.items.add(listMenuItem);
    that.menuBar.items.add(mapMenuItem);
    that.menuBar.setActive(listMenuItem);

    // Add the panels and the menubar to the page
    that.appendControl(that.listPanel);
    that.appendControl(that.mapPanel);
    that.appendControl(that.menuBar);
    return that;
};