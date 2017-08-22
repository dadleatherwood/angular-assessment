angular.module('assessment').service('shopService', function($http){

  this.getAllProducts = function(){
    return $http.get('https://practiceapi.devmountain.com/products')
  }

  this.getProductById = function(id){
    return $http.get(' https://practiceapi.devmountain.com/products/' + id)
  }


})
