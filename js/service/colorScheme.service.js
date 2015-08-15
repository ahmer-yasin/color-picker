'use strict';
pageDesign.factory('colorScheme', function () {

    var colorSchemeList = [], defaultColorScheme = [
        {
            'color1': '#016e75',
            'color2': '#f1cf92',
            'color3': '#f4a23c',
            'color4': '#d96a25',
            'color5': '#000'
        },
        {
            'color1': '#deebff',
            'color2': '#3c678f',
            'color3': '#214166',
            'color4': '#12274a',
            'color5': '#fff'
        },
        {
            'color1': '#fffaa9',
            'color2': '#e8c0a5',
            'color3': '#9ab7e8',
            'color4': '#fbb6ff',
            'color5': '#000'
        }
    ], restoreDefault =  function () {
        colorSchemeList.splice(0, colorSchemeList.length);
        angular.copy(defaultColorScheme, colorSchemeList);
    };
    restoreDefault();

    return {
        all: function () {
            return colorSchemeList;
        },
        add: function (colorScheme) {
            colorSchemeList.push(colorScheme);

            return colorSchemeList;
        },
        restoreDefault: restoreDefault
    }
});