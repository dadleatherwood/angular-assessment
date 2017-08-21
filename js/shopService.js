angular.module('assessment').service('shopService', function($http){

  this.getAllProducts = function(){
    return $http.get('https://practiceapi.devmountain.com/products')
    .then(function(response) {
      return response
    })
  }
  
})
