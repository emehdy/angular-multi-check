angular.module('angularMultiCheckDemo',['angularMultiCheck'])
.controller('demoController',function($scope,$timeout){
	$scope.colors=['red','green','white','blue'];
	$scope.colorsRows=[{id:1,name:'red'},{id:2,name:'green'} ]
	$scope.row={};
	$scope.name='id';;
	$timeout(function(){
		$scope.row.data="red,green,white";
		$scope.row.ids1="0";
		$scope.row.ids="3,4";
	},1000)
	
	$timeout(function(){
		$scope.colorsRows=[{id:1,name:'red'},{id:2,name:'green'},{id:3,name:'white'},{id:4,name:'blue'},{id:2,name:'green'},{id:3,name:'white'},{id:4,name:'blue'},{id:2,name:'green'},{id:3,name:'white'},{id:4,name:'blue'},{id:2,name:'green'},{id:3,name:'white'},{id:4,name:'blue'},{id:2,name:'green'},{id:3,name:'white'},{id:4,name:'blue'}]
	},4000)
})