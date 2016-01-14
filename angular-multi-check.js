 angular.module('angularMultiCheck')
     
    .directive('multiCheck', function() 
	{
		 return {
			restrict: 'E',
			require: 'ngModel',
			replace:true,
			template:'<div><h1><input ng-value="model">{{model_ar}} <pre>{{data}}</pre></h1><label ng-repeat="item in src"><input ng-model="data[item]" ng-change="check()" type="checkbox">{{item}}</label></div>',//
			scope:{model:'=ngModel',src:'='},
			link: function (scope, element, attrs) 
			{
				scope.$watch('model',function(val){
					if(val===0)val='0';val=val||'';
					scope.model_ar=(val+'').split(',');
					scope.data={};
					scope.model_ar.forEach(function(key){scope.data[key]=true;})
				});
				scope.data={};
				scope.check=function(val){
					scope.model_ar=[];
					scope.src.forEach(function(key){
						if(scope.data[key])scope.model_ar.push(key);
					})
					scope.model=scope.model_ar.join(',');
				} ;		
			}
		}
    });