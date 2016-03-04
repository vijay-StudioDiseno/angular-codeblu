// JavaScript Document
app.directive('navigationHeader', function(){
	return{
	restrict: "EAC",
	templateUrl: "templates/navigation-header.html",
	controller: "navController"
	}
});
app.directive('section01', function(){
	return{
		restrict: "EAC",
		templateUrl: "templates/section-01.html",
		controller: "sectionController"
	}
});
