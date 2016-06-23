app.controller('todoCtrl', function($scope){
	$scope.tasks = [
		{text: 'Text', done: false},
		{text: 'Text2', done: false},
		{text: 'Text3', done: false}
	]

	$scope.addTask = function(){
		$scope.tasks.push({text: $scope.newTask.text, done: false});
		$scope.newTask = '';
	}

	$scope.removeTask = function(i){
		$scope.tasks.splice(i, 1);
	}

	$scope.done = function(){
		d = getElementById('do');
		if($scope.tasks.done == true){
			d.addClass('green');
		} 
		else{
			d.style.background='red';
		}
	}
})