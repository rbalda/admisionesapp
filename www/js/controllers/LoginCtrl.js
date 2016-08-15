app.controller('LoginCtrl', function ($scope, $stateParams, ionicMaterialInk,$cordovaSQLite) {
  ionicMaterialInk.displayEffect();
  $scope.usuario={nombres:'',apellidos:''};
  $scope.guardar = function(){
     var db = $cordovaSQLite.openDB({ name: "addmisionesapp.db" });
     var query = "insert into usuario(nombres,apellidos) values("+usuario.nombres+","+usuario.apellidos+")";
     $cordovaSQLite.execute(db,query,["test",100]).then(function(res) {
      console.log("insertId: " + res.insertId);
    }, function (err) {
      console.error(err);
    });
  };
});
