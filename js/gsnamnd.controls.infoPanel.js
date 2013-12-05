gsnamnd.controls.infoPanel = function () {
	var i, that = wui.controls.panels.standard();
	that.titlebar = wui.controls.titleBar();
	that.setInfo = function (id) {
		that.titlebar.setText(id);
	};
	that.mainPanel = wui.controls.panels.scroll();
	that.back = wui.controls.buttons.back();
	that.back.setText("back");
	that.edit = wui.controls.buttons.standard();
	that.edit.setText("Edit");
	that.titlebar.leftContainer.appendControl(that.back);
	that.titlebar.rightContainer.appendControl(that.edit);
	that.list = wui.controls.lists.rounded();
	var addListItem = function () {
		var listItem = wui.controls.lists.items.standard();
		listItem.setText(i);
		listItem.setOnClick(function () {
			alert("Hej");
		});
		that.list.items.add(listItem);
	};
	//Add 20 items to the list
	for (i = 0; i < 20; i++) {
		addListItem();
	}
	that.mainPanel.appendControl(that.list);
	that.appendControl(that.titlebar);
	that.appendControl(that.mainPanel);
	return that;
};