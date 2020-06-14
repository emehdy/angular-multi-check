//by emehdy@gmail
 angular.module('angularMultiCheck', [])
     
    .directive('multiCheck', function() 
	{
		 return {
			restrict: 'E',
			require: 'ngModel',
			replace:true,
			template:'<div class="multi-check"><div class="multi-check-all"><label ng-if="allItemsLabel"><input ng-model="all.status" ng-change="all.check()" type="checkbox">{{allItemsLabel}}</label></div><div class="multi-check-items"><label ng-repeat="item in items" ng-hide="all.status"><input ng-model="data[item[itemKey]]" ng-change="check()"  type="checkbox">{{item[itemLabel]}}</label></div></div>',//
			scope:{
				model:'=ngModel',
				items:'=',
				itemKey:'=',
				itemLabel:'=',
				allItemsKey:'@',
				allItemsLabel:'@',
			},
			link: function (scope, element, attrs) 
			{
				scope.itemKey=scope.itemKey||'id';
				scope.itemLabel=scope.itemLabel||'name';
				scope.allItemsKey=scope.allItemsKey||0;
				scope.$watch('model',function(val){
					if(val===0)val='0';val=val||'';
					scope.model_ar=(val+'').split(',');
					scope.data={};
					scope.model_ar.forEach(function(key){scope.data[key]=true;});
					if(!scope.allItemsLabel)return;
					if(scope.model!=scope.allItemsKey)return ;
					scope.data={};
					scope.all.status=true;
				});
				scope.data={};
				scope.all={status:0,
				check:function(val){
					scope.items.forEach(function(item){
						var key=item[scope.itemKey]||-1;
						 scope.data[key] =true;
					})
					if(scope.all.status)
						scope.model=scope.allItemsKey;
					else
						scope.check();
					
				}
				
				
				};
				scope.check=function( ){
					scope.model_ar=[];
					scope.items.forEach(function(item){
						var key=item[scope.itemKey]||-1;
						if(scope.data[key])scope.model_ar.push(key);
					})
					scope.model=scope.model_ar.join(',');
				} ;		
			}
		}
    });
	angular.module('angularMultiCheck')
	.directive('multiSimpleCheck', function() 
	{
		 return {
			restrict: 'E',
			require: 'ngModel',
			replace:true,
			template:'<div class="multi-check"><div class="multi-check-items"><label ng-repeat="item in items"><input ng-model="data[item]" ng-change="check()" type="checkbox">{{item}}</label></div></div>',//
			scope:{model:'=ngModel',items:'=',itemKey:'='},
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
					scope.items.forEach(function(key){
						if(scope.data[key])scope.model_ar.push(key);
					})
					scope.model=scope.model_ar.join(',');
				} ;		
			}
		}
    });
	
	