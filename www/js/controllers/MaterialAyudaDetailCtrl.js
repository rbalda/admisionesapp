app.controller('MaterialAyudaDetailCtrl',function($scope,MaterialAyuda, $ionicPlatform,ionicMaterialInk,$stateParams){
  ionicMaterialInk.displayEffect();
  $scope.material;
  $ionicPlatform.ready(function() {
        $scope.material = MaterialAyuda.getMateria($stateParams.idMaterial);
  });
});
