angular.module('assessment').controller('shopCtrl', function($scope,shopService,$state){

  shopService.getAllProducts()
    .then(response => {
      $scope.products = response
      return response
    })



})
