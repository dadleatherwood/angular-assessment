angular.module('assessment').controller('productDetailsCtrl',function($scope,$stateParams,shopService){

    $scope.itemId = $stateParams.id;

    $scope.getProductById = function(){
        shopService.getProductById($scope.itemId).then(response => {
            $scope.product = response.data;
        });
    }

    $scope.getProductById();

});
