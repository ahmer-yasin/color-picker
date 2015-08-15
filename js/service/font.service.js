'use strict';
pageDesign.factory('fontsList', function () {
    //var fontsList = [
    //    'Open Sans',
    //    'Oswaldo',
    //    'Roboto',
    //    'Shadows Into Light'
    //];

    var fontsList = [
        {
            title :{
                type: 'Open Sans',
                weight: 800
            },
            text: {
                type: 'Roboto',
                weight: 800
            }
        },
        {
            title :{
                type: 'Oswaldo',
                weight: 800
            },
            text:{
                type: 'Shadows Into Light',
                weight: 800
            }
        },
        {
            title :{
                type: 'Roboto',
                weight: 800
            },
            text: {
                type: 'Open Sans',
                weight: 800
            }
        },
        {
            title :{
                type: 'Shadows Into Light',
                weight: 800
            },
            text: {
                type: 'Oswaldo',
                weight: 800
            }
        }
    ];



    return {
        all: function () {
            return fontsList;
        },
        add: function (font) {
            fontsList.push(font);

            return fontsList;
        },
        remove: function () {
            
            return fontsList;
        }
    }
});