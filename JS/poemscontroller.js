angular.module('Poems')
	.controller("PoemsController", PoemsController);

PoemsController.$inject = ['$resource','PoemsFact'];

function PoemsController($resource,PoemsFact) {
	var vm = this;
	vm.all = [];
	vm.getPoems = getPoems;

	function getPoems(){
		vm.all = PoemsFact.query();
	}

	getPoems();

function addPoem(){
	vm.newPoem = PoemFact.save();
	}
	getPoems();
}