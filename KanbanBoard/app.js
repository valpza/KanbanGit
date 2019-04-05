angular.module('KanbanApp',[])//se crea el modulo luego llamamos a nuesta aplicacaion
.controller('KanbanController', function($scope){//el scoupe nos permite acceder a cualquier elemento que se defina en el html
	var KanbanCtrl = this;  // 
	//KanbanCtrl.demo="one";	//
	KanbanCtrl.tasks = [];
	var index =0;
							//
	KanbanCtrl.show=function(){
		//console.log($scope.demoview);
		var tasktmp = {
			index: index,
			name: $scope.newObj.name,
			descripcion: $scope.newObj.descripcion,
			status: 1 
		}
	 	console.log($scope.newObj);
	   	KanbanCtrl.tasks.push(tasktmp);
	   	index +=1;
	   	$scope.newObj = {};

	}
	KanbanCtrl.next = function(index){
		KanbanCtrl.tasks[index].status++;
	}

	KanbanCtrl.after = function(index){
		KanbanCtrl.tasks[index].status--;
	}
	});						//





















							//
							//singlenton