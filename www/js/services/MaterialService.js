app.factory('MaterialAyuda',function(){
  self = this;
  var mat=[{
    nombre:"matematicas",
    id:0,
    capitulos: [
      {id:1,formulas:8},
      {id:2,formulas:12},
      {id:3,formulas:0},
      {id:4,formulas:1},
      {id:5,formulas:5},
      {id:6,formulas:0},
      {id:7,formulas:6},
      {id:8,formulas:9},
      {id:9,formulas:4},
      {id:10,formulas:10},
      {id:11,formulas:6}
    ]
  }];
  self.materias = function(){
    return mat;
  };
  self.getMateria = function(index){
    return mat[index];
  }
  return self;
});
