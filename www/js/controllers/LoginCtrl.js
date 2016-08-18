app.controller('LoginCtrl', function ($scope, $stateParams, ionicMaterialInk,$cordovaSQLite,Usuario,$state,$rootScope) {
  ionicMaterialInk.displayEffect();
  $scope.usuario = {nombres:'',apellidos:''};
  $scope.guardar = function(){
    Usuario.add($scope.usuario);
    $state.go('app.home');
    $rootScope.usuario_global = $scope.usuario;
  };
});
