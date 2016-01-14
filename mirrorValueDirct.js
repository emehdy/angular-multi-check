/*
<form ng-app="mirrorValueDirct" name="myform" novalidate> 
    <div ng-controller="Ctrl">
    <input name="number"  ng-model="row.value">{{row.value}}
   <mirror-value ng-model="row.value"></mirror-value>
   
    </div>
</form>
*/

var $scope;
var app = angular.module('mirrorValueDirct', []);

app.controller('Ctrl', function($scope) {
    $scope.row =  {value: 100, info: true}
});



app.directive('mirrorValue', function () {



	return {
		restrict: 'E',
		require: 'ngModel',
		replace:true,
		template:'<h1><input ng-model="model">{{model}}</h1>',
		scope:{model:'=ngModel'},
		link: function (scope, element, attrs) {



		}
	};
});