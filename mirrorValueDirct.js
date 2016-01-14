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

 function getAtrrValue(scope,attribute, defaultValue) {
        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
      }

	return {
  restrict: 'E',
		require: 'ngModel',
    replace:true,
    template:'<h1><input ng-model="model">{{model}}</h1>',
    
		link: function (scope, element, attrs, ngModel) {
		scope.$watch('model',function(newValue,oldValue){
    	if(scope.model==undefined)return;
      ngModel.$setViewValue(scope.model);
					ngModel.$render();
    
    });
    
    scope.$watch(attrs.ngModel, function(newValue,oldValue) {
   		scope.model=scope.$eval(attrs.ngModel) ;
     //	
			  });
		}
	};
});