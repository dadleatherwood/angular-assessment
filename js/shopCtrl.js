angular.module('assessment').controller('shopCtrl', function($scope,shopService,$state){

  shopService.getAllProducts()
    .then(response => {
      $scope.products = response.data
      console.log($scope.products);
      return response.data
    })

})
