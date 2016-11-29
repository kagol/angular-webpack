module.exports =function(ngModule){
	ngModule.directive('helloWorld',aFun);
	require('./hello-world.css');
	function aFun(){
		return{
			restrict:'E',
			scope:{},
			template: require('./hello-world.html'),
			controllerAs:'vm',
			controller:function(){
				var vm=this;
				vm.greeting='angularjssswebpack'
			}
		}
	}
}