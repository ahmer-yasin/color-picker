'use strict';
pageDesign.factory('current', [ 'colorScheme', function (colorScheme) {
    var saved = []
    , current = {}
    , defaultColorScheme = {
        color1: '#deebff',
        color2: '#3c678f',
        color3: '#214166',
        color4: '#12274a',
        color5: '#fff'
    }
    , defaultSetting =  {
        dcFont :  {
            title : {
                type: 'Oswaldo',
                weight: 800
            },
            text: {
                type: 'Shadows Into Light',
                weight: 800
            }
        },
        dcBGImage : {
            'background-image'    : '',
            'background-repeat'   : '',
            'background-position' : '',
            'background-size'     : ''
        },
        selectedColorScheme: angular.copy(defaultColorScheme),
        colorScheme :  angular.copy(defaultColorScheme)
    };

    saved.push(defaultSetting);
    return {
        get: function () {
            angular.copy( saved[ saved.length - 1 ], current );
            return current;
        },
        resetColorScheme: function () {
            current.colorScheme = angular.copy( current.selectedColorScheme );
            return current;
        },
        saveSettings: function () {
            saved.push(angular.copy(current));
        },
        resetSettings: function () {
            //colorScheme.restoreDefault();
            return angular.copy( defaultSetting, current );
        },
        changeColorScheme: function (colorScheme){
            current.colorScheme = angular.copy(colorScheme);
            current.selectedColorScheme = angular.copy(colorScheme);
        }
    }
}]);