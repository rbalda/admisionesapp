app.controller("MateriasDetailCtrl",function($scope,Materia,$ionicModal, $ionicPlatform,ionicMaterialInk,$stateParams){
  ionicMaterialInk.displayEffect();
  $scope.materia;
  $scope.nota={nota:0,posible:-1};
  $ionicPlatform.ready(function() {

        // Initialize the database.
        Materia.initDB();

        // Get all birthday records from the database.
        $scope.materia=Materia.buscarMateria($stateParams.id);
    });

    $ionicModal.fromTemplateUrl('templates/notacreate.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.showAddNota = function() {
        $scope.nota = {};
        $scope.action = 'Agregar';
        $scope.isAdd = true;
        $scope.modal.show();
    };

    $scope.showEditNotaModal = function(nota,indice) {
        $scope.nota = nota;
        $scope.action = 'Editar';
        $scope.isAdd = false;
        $scope.modal.show();
        $scope.indice = indice
    };

    $scope.saveNota = function() {
        if ($scope.isAdd) {
            $scope.materia.calificaciones.push($scope.nota);
            Materia.updateMateria($scope.materia);
        } else {
            Materia.updateMateria($scope.materia);
        }
        $scope.modal.hide();
    };

    $scope.closeModal = function(){
      $scope.modal.hide();
    }

    $scope.deleteNota = function() {
        $scope.materia.calificaciones.splice($scope.indice,1);
        Materia.updateMateria($scope.materia);
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });


});
