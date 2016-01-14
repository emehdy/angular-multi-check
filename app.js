angular.module('angularMultiCheck', [])
.controller('demoController',function($scope,$timeout){
	$scope.colors=['red','green','white','blue'];
	
	$scope.row={};
	$timeout(function(){
		$scope.row.data="red,green,white";
	},5000)
})