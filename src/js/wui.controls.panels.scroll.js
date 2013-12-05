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