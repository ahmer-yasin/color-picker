/**
 * Created by Ahmer on 5/20/2015.
 */
pageDesign.directive("fileReaderGallery", ['background', function (background) {
    return {
        restrict: "E",
        scope: true,
        templateUrl: "templates/directive.html",
        replace: true,
        link: function ($scope, el, attrs) {
            var input = null,
                drag_image_gallery = el.find('.drag_image_gallery');

            $scope.dragging = false;
            $scope.fileselected = false;
            $scope.uploaded = false;
            $scope.uploading = false;
            $scope.image = null;

            $scope.clearFileReader = function () {
                if (!attrs.styling || !input) return false;

                $scope.formTitan.elementStyles[attrs.styling][$scope.styledItem.pt]['background-image'] = '';

                $scope.formSelected[attrs.styling].imageFile = null;
                $scope.formSelected[attrs.styling].isImage = false;

                input.value = '';
                $scope.fileselected = false;
                $scope.imageName = '';
            };
            var readfiles = function (files) {
                var reader, bg;
                if (files && files[0]) {
                    if (files.length > 1) {
                        return console.log("Select single file only");
                    }

                    reader = new FileReader;
                    reader.onload = function (e) {
                        if (files[0].type.indexOf('image/') !== -1) {
                            if (e.target.result) {
                                bg = {
                                    'background-image':  e.target.result,
                                    'background-repeat': 'repeat',
                                    'background-position': 'top',
                                    'background-size': ''
                                };
                                $scope.uploading = true;
                                $scope.$apply(function () {
                                    background.add(angular.copy(bg));
                                    $scope.current.dcBGImage = angular.copy(bg);
                                    $scope.imageName = files[0].name;
                                    $scope.image = e.target.result;
                                    $scope.fileselected = true;
                                    console.log(files[0])
                                });
                            }
                        } else {
                            return console.log('Please select an Image');
                        }
                    };
                    return reader.readAsDataURL(files[0]);
                }
            };

            $scope.clickUpload = function () {
                el.find('.bg-file-reader').click();
            };

            drag_image_gallery[0].ondragover = function () {
                $scope.dragging = true;
                //drag_image_gallery.addClass('ondragover');
                $scope.$digest();
                return false;
            };

            drag_image_gallery[0].ondragleave = function () {
                $scope.dragging = false;
                $scope.$digest();
                //drag_image_gallery.removeClass('ondragover');
            };

            drag_image_gallery[0].ondrop = function (e) {
                $scope.dragging = false;
                $scope.$digest();
                //drag_image_gallery.removeClass('ondragover');
                e.preventDefault();
                readfiles(e.dataTransfer.files);
            };

            el.find('.bg-file-reader').on('change', function () {
                readfiles(this.files);
            });
        }
    };
}]);