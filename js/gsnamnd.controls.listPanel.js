gsnamnd.controls.listPanel = function () {
	var i,
		that = wui.controls.panels.standard(),
		infoPanel = gsnamnd.controls.infoPanel();
	infoPanel.hide();
	that.titlebar = wui.controls.titleBar();
	that.titlebar.setText("List");
	that.mainPanel = wui.controls.panels.scroll();
	that.mainPanel.getDomElement();
	that.addButton = wui.controls.buttons.add();
	that.addButton.setText("Add");
	that.addButton.setOnClick(function () {
		addListItem(i);
		i++;
	});
	that.titlebar.leftContainer.appendControl(that.addButton);
	that.list = wui.controls.lists.standard();
	var addListItem = function (i) {
		var listItem = wui.controls.lists.items.standard();
		listItem.setText(i);
		listItem.setOnClick(function () {
			that.titlebar.hide();
			that.mainPanel.hide();
			infoPanel.setInfo(i);
			infoPanel.show();
			infoPanel.back.setOnClick(function () {
				that.titlebar.show();
				that.mainPanel.show();
				infoPanel.hide();
			});
		});
		that.list.items.add(listItem);
	};
	for (i = 0; i < 20; i++) {
		addListItem(i);
	}
	that.mainPanel.appendControl(that.list);
	that.appendControl(that.titlebar);
	that.appendControl(that.mainPanel);
	that.appendControl(infoPanel);
	return that;
};