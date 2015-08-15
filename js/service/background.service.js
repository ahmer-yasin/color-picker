'use strict';
pageDesign.factory('background',[  function () {
    var backgrounds =  [
        {
            'background-image': 'http://bashooka.com/wp-content/uploads/2012/04/patterns_4.jpg',
            'background-repeat': 'repeat',
            'background-position': 'top',
            'background-size': ''
        },
        {
            'background-image': 'http://gdj.gdj.netdna-cdn.com/wp-content/uploads/2012/07/background-pattern-3.jpg',
            'background-color': '#000',
            'background-repeat': 'repeat',
            'background-position': 'top',
            'background-size': ''
        },
        {
            'background-image': 'http://duckfiles.com/wp-content/uploads/2011/05/016-preview.png',
            'background-color': '#fff',
            'background-repeat': 'repeat',
            'background-position': 'top',
            'background-size': ''
        },
        {
            'background-image': 'http://www.webtechelp.net/wp-content/uploads/2014/05/City-Landscape.jpg',
            'background-color': '#fff',
            'background-repeat': 'repeat',
            'background-position': 'bottom',
            'background-size': '100%'
        }
    ];
    return {
        all: function () {
            return backgrounds;
        },
        add: function (background) {
            backgrounds.push(background);

            return backgrounds;
        },
        remove: function () {
            
            return backgrounds;
        }
    }
}]);