app.controller('MaterialAyudaCtrl',function($scope,MaterialAyuda, $ionicPlatform,ionicMaterialInk){
  ionicMaterialInk.displayEffect();
  $scope.materialApoyo;
  $ionicPlatform.ready(function() {
        $scope.materialApoyo = MaterialAyuda.materias();
  });
});
