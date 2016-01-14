 angular.module('angularMultiCheck')
     
    .directive('multiCheck', function() {
		var check= function (scope, val) 
		{
			scope.selectedValue = val;
			scope.model = val;
		} 
        return {
            require: ['?ngModel' ],
            restrict: 'E',
			template:'<label ng-repeat="item in src"><input ng-click="check(item)" value="{{item}}" type="checkbox">{{item}}</label>',
			scope: {
			  src: '=',model: '=ngModel'
			},
            link: function(scope, el, attrs, controller) {
				scope.$watch(attrs.ngModel,function(oldV,newV){
					console.info(oldV,newV)
				});
				 scope.check = check;
				scope.scope = scope;	
            }
        };
    });