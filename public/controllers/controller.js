function AppCtrl($scope,$http){
	
	console.log('server running');
 var refresh =  function(){
	$http.get('/contactlist').success(function(response){
		console.log('I got the data');
		$scope.contentlist = response;
		$scope.contact = "";
	});
 };
refresh();	
	$scope.addcontact = function(){
		//console.log($scope.contact);
		
		$http.post('/contactlist',$scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	}
	$scope.deletecontact = function(id){
		
		$http.delete('/contactlist/'+id).success(function(response){
			console.log(response);
			refresh();
		});
	}
	$scope.editcontact = function(id) {
		$http.get('/contactlist/'+id).success(function(response){
			$scope.contact = response;
		});
	}
	$scope.updatecontact = function(id) {
		$http.put('/contactlist'+$scope.contact._id,$scope.contact).success(function(response){
			refresh();
		});
	}
}