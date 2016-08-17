app.factory('Materia',function($q,Loki){
  var _db;
  var _materias;
  var self = this;

  self.initDB = function(){
    var adapter = new LokiCordovaFSAdapter({"prefix": "loki"});
        _db = new Loki('MateriaDB',
                {
                    autosave: true,
                    autosaveInterval: 1000, // 1 second
                    adapter: adapter
                });
  };

  self.todasMaterias = function(){
    return $q(function(resolve, reject){
      var options = {};
      _db.loadDatabase(options,function(){
        _materias = _db.getCollection('materias');
        if (!_materias){
          _materias = _db.addCollection('materias');
        };
        resolve(_materias.data);
      });
    });
  };

  self.agregarMateria = function(materia){
    _materias.insert(materia);
  };

  self.updateMateria = function(materia){
    _materias.insert(materia);
  };

  self.buscarMateria= function(materiaId){
    return _materias.get(materiaId);
  }

  self.eliminarMateria = function(materia){
    _materias.delete(materia);
  };
  return self;
});
