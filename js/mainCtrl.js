angular.module('quoteBook')

.controller('mainCtrl', function($scope, mainService){

$scope.quotes = mainService.getQuotes();


});
