angular.module('Poems')
.factory('PoemsFact',PoemsFactory);

PoemsFactory.$inject = ['$resource'];

function PoemsFactory($resource) {
	return $resource('http://localhost:3000/Vwrds/:id');

}