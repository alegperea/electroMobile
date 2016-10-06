angular.module('starter.services', [])

.factory('Productos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var productos = [{
    id: 0,
    name: '20-10001',
    lastText: 'ALTERNADOR UNI BOSCH 24/65 SCANIA SERIE4 ',
    face: 'img/20-10001.jpg'
  }, {
    id: 1,
    name: '20-10003',
    lastText: 'ALTERNADOR UNI BOSCH 24/80 M.BENZ 712C ',
    face: 'img/20-10003.jpg'
  }, {
    id: 2,
    name: '20-10004',
    lastText: 'ALTERNADOR UNI BOSCH 24/55 SCANIA 113 ',
    face: 'img/20-10004.jpg'
  }, {
    id: 3,
    name: '20-10005',
    lastText: 'ALTERNADOR UNI BOSCH 24/55 M.BENZ ',
    face: 'img/20-10005.jpg'
  }, {
    id: 4,
    name: '20-10006',
    lastText: 'ALTERNADOR UNI BOSCH 24/80 M.BE.',
    face: 'img/20-10006.jpg'
  },{
    id: 5,
    name: '20-10007',
    lastText: 'ALTERNADOR UNI BOSCH 12/105 RENAULT.',
    face: 'img/20-10007.jpg'
  }];

  return {
    all: function() {
      return productos;
    },
    remove: function(producto) {
      productos.splice(productos.indexOf(producto), 1);
    },
    get: function(productoId) {
      for (var i = 0; i < productos.length; i++) {
        if (productos[i].id === parseInt(productoId)) {
          return productos[i];
        }
      }
      return null;
    }
  };
});
