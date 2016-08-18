app.controller('CapituloCtrl',function($scope,MaterialAyuda, $ionicPlatform,ionicMaterialInk,$stateParams){
  ionicMaterialInk.displayEffect();
  $scope.materia;
  $scope.capitulo;
  $scope.rango = [];
  $ionicPlatform.ready(function() {
        $scope.materia =  MaterialAyuda.getMateria($stateParams.idMaterial).nombre;
        $scope.capitulo = MaterialAyuda.getMateria($stateParams.idMaterial).capitulos[$stateParams.cap];
        for(var i=1; i<= $scope.capitulo.formulas;i++){
          $scope.rango.push(i);
        };
  });


});
