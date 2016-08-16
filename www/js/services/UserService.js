app.factory('Usuario', function($cordovaSQLite, DBA) {
  var self = this;
  self.all = function() {
    return DBA.query("SELECT id, nombres,apellidos FROM usuario")
    .then(function(result){
      return DBA.getAll(result);
    });
  }
  self.get = function(userId) {
    var parameters = [userId];
    return DBA.query("SELECT id, nombres, apellidos FROM usuario WHERE id = (?)", parameters)
    .then(function(result) {
      return DBA.getById(result);
    });
  }
  self.add = function(usuario) {
    var parameters = [usuario.nombres, usuario.apellidos];
    return DBA.query("INSERT INTO usuario (nombres, apellidos) VALUES (?,?)", parameters);
  }
  self.remove = function(usuario) {
    var parameters = [usuario.id];
    return DBA.query("DELETE FROM usuario WHERE id = (?)", parameters);
  }
  // self.update = function(usuario, editMember) {
  //   var parameters = [editMember.id, editMember.name, origMember.id];
  //   return DBA.query("UPDATE team SET id = (?), name = (?) WHERE id = (?)", parameters);
  // }
  return self;
});
