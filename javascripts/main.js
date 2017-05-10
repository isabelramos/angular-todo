var app = angular.module("TodoApp", []);

app.controller("NavCtrl", ($scope) => {
	$scope.cat = "Meow";
	$scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Items"}];

});

app.controller("ItemCtrl", ($scope) => {
	$scope.dog = "Woof!";
});