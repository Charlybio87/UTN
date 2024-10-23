class Vehiculo {
  constructor(id, velocidad,cantidad_ruedas,precio,cantidad_pasajeros_max,marca){
    this.id = id;
    this.velocidad = velocidad;
    this.cantidad_ruedas = cantidad_ruedas;
    this.cantidad_ruedas = cantidad_ruedas;
    this.precio = precio;
    this.cantidad_pasajeros_max = cantidad_pasajeros_max;
    this.marca = marca;
  }
  probar(destino){
    console.log('sonido de vehiculo' + destino );
  }

}

class Bicicleta extends Vehiculo{
  constructor(
    id,
    velocidad,
    precio,
    marca,
    modelo,
    rodado,
    tipo_de_freno
  ){
    super( id, velocidad, 2, precio, 2, marca)
    // datos recibidos por el usuario
    this.modelo = modelo;
    this.rodado = rodado;
    this.tipo_de_freno = tipo_de_freno;
  }
  probar(destino){
    console.log('RING...RING...!!' + destino);
  }
}

const bicicleta_1 = new Bicicleta(1, 30, 7080, 'BMX', 26, 'Pastilla')
console.log(bicicleta_1);
