'use strict';

var pageDesign = angular.module('pageDesign', ['ngRoute']);

pageDesign.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'templates/home.html',
				controller: 'designCtrl'
			});

	}]);

pageDesign.controller('designCtrl',
	['$scope', 'background', 'fontsList', 'colorScheme', 'current',
		function($scope, background, fontsList, colorScheme, current) {

			$scope.backgrounds = background.all();
			$scope.fontsList = fontsList.all();
			$scope.colorSchemes = colorScheme.all();

			$scope.current = current.get();

			$scope.kuler = {};
			$scope.kuler.open = false;

			$scope.changeColorScheme = current.changeColorScheme;
			$scope.saveSettings = current.saveSettings;
			$scope.resetSettings = current.resetSettings;
		}]);