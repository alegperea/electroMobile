angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ProductosCtrl', function($scope, Productos) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.productos = Productos.all();
  $scope.remove = function(productos) {
    Productos.remove(productos);
  };
})

.controller('ProductoDetailCtrl', function($scope, $stateParams, Productos) {
  $scope.producto = Productos.get($stateParams.productoId);
})

.controller('UbicacionCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
