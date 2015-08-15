// Add theme UI
ColorWheel.extend('theme', function (colorWheel) {
    var theme = colorWheel.container.select('.theme');
    colorWheel.dispatch.on('bindData.theme', function (data) {
        var swatches = theme.selectAll('.theme__swatch').data(data);
        var newSwatches = swatches.enter().append('div').attr('class', 'theme__swatch');

        // Add color
        newSwatches.append('div').attr('class', 'theme__color');

        // Add sliders
        newSwatches.append('input')
            .attr('type', 'range')
            .attr('class', 'theme__slider')
            .on('input', function (d) {
                d.v = parseInt(this.value) / 100;
                colorWheel.dispatch.update();
            })
            .on('change', function () {
                colorWheel.dispatch.updateEnd();
            });

        swatches.exit().remove();
    });

    colorWheel.dispatch.on('update.theme', function () {
        colorWheel.container.selectAll('.theme__swatch').each(function (d, i) {
            switch (colorWheel.currentMode) {
                case ColorWheel.modes.TRIAD:
                    this.style.order = this.style.webkitOrder = i % 3;
                    break;
                default:
                    this.style.order = this.style.webkitOrder = ColorWheel.markerDistance(i);
                    break;
            }
        });

        colorWheel.container.selectAll('.theme__color').each(function (d) {
            var c = tinycolor({h: d.h, s: d.s, v: d.v});
            this.style.backgroundColor = c.toHexString();
        });

        colorWheel.container.selectAll('.theme__slider').each(function (d) {
            var val = parseInt(d.v * 100);
            this.value = val;
            d3.select(this).attr('value', val);
        });
    });
});
