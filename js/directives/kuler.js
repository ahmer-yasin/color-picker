pageDesign.directive("kuler", [ 'colorScheme', 'current', function (colorScheme, current) {
    return {
        restrict: "E",
        templateUrl: "templates/kuler.html",
        replace: false,
        current: '=',
        kuler: '=',
        link: function (scope, el, attrs) {
            var colorWheel;
            scope.lock = 'lock';
            scope.cs = {};

            scope.switchColor = function () {
                if (scope.cs.color5 === "#fff") {
                    scope.cs.color5 = "#000";
                } else {
                    scope.cs.color5 = "#fff";
                }
            };
            scope.lockUnlock = function(){
                if (colorWheel.currentMode === "Custom") {
                    scope.lock = 'lock';
                    colorWheel.currentMode = "Analogous";
                } else {
                    scope.lock = 'unlock';
                    colorWheel.currentMode = "Custom";
                }
            };
            scope.save = function () {
                colorScheme.add(angular.copy(scope.cs));
                // i don't understand what the next line does
                current.changeColorScheme(angular.copy(scope.cs));
                // if you want to select the 'color scheme' you created with the 'color wheel' uncomment the next line
                //current.changeColorScheme(angular.copy(scope.current.colorScheme));

                scope.closeDialog();
            };
            scope.loadDialog = function() {
                scope.kuler.open = true;
                scope.cs = angular.copy(scope.current.colorScheme);
                scope.current.colorScheme=scope.cs;
                colorWheel = new ColorWheel({
                    container: el[0].firstChild,
                    radius: 25,
                    margin: 10,
                    markerWidth: 10,
                    defaultSlice: 10,
                    initMode: 'Analogous'
                });
                colorWheel.bindData([scope.cs.color1,
                                     scope.cs.color2,
                                     scope.cs.color3,
                                     scope.cs.color4]);
                colorWheel.currentMode = "Analogous";
                colorWheel.dispatch.on('update', function (){
                    var index = 1;
                    colorWheel.container.selectAll('circle').each(function(d){
                        if( d !== undefined ){
                            var c = tinycolor({h: d.h, s: d.s, v: d.v});
                            scope.cs['color' + index++] = c.toHexString();

                        }
                    });
                    scope.$apply();
                });
            };
            scope.closeDialog = function () {
                current.resetColorScheme();
                scope.kuler.open = false;
                colorWheel.delete();
            };
            scope.reset = function () {
                current.resetColorScheme();
                colorWheel.delete();
                scope.loadDialog();
            };
        }
    };
}]);
