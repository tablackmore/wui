gsnamnd.controls.infoPanel = function () {
	var that = wui.controls.panels.standard();
	var i;
	that.titlebar = wui.controls.titleBar();
	that.setInfo = function (id) {
		that.titlebar.setText(id);
	};

	that.mainPanel = wui.controls.panels.scroll();

	that.mainPanel.getDomElement();
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
	for (i = 0; i < 20; i++) {
		addListItem();
	}
	that.mainPanel.appendControl(that.list);

	that.appendControl(that.titlebar);
	that.appendControl(that.mainPanel);
	return that;
};