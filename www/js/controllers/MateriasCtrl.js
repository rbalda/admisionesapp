app.controller('MateriasCtrl',function($scope,Materia,$ionicModal, $ionicPlatform,ionicMaterialInk){
  ionicMaterialInk.displayEffect();
  $scope.materias;
  $ionicPlatform.ready(function() {

        // Initialize the database.
        Materia.initDB();

        // Get all birthday records from the database.
        Materia.todasMaterias()
                        .then(function (materias) {
                            $scope.materias = materias;
                        });
    });
    // Initialize the modal view.
    $ionicModal.fromTemplateUrl('templates/materiacreate.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.showAddMateriaModal = function() {
        $scope.materia = {};
        $scope.action = 'Agregar';
        $scope.isAdd = true;
        $scope.modal.show();
    };

    $scope.showEditMateriaModal = function(materia) {
        $scope.materia = materia;
        $scope.action = 'Editar';
        $scope.isAdd = false;
        $scope.modal.show();
    };

    $scope.saveMateria = function() {
        if ($scope.isAdd) {
            $scope.materia.calificaciones = []
            Materia.agregarMateria($scope.materia);
        } else {
            Materia.updateMateria($scope.materia);
        }
        $scope.modal.hide();
    };

    $scope.closeModal = function(){
      $scope.modal.hide();
    }

    $scope.deleteMateria = function() {
        Materia.eliminarMateria($scope.materia);
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });


});
