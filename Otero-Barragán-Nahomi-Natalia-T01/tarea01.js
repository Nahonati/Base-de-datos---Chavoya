// Declarar la función

function convertirFecha(fecha) {
  // Declarar una expresión regular ayudará a validar el formato
  // de la fecha inicial que estamos requiriendo

  const re = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  // Aunque en este caso no estamos validando casos especiales como febrero,
  // si establecemos al menos que el valor de los días sean entre el 01 y 31 (0[1-9]|[12][0-9]|3[01]),
  // el mes entre 01 y 12 (0[1-9]|1[0-2]) y que el año contenga 4 digitos (d{4}$)

  if (!re.test(fecha)) return null; // .test() es un metodo de las expresiones regulares
  //y sirve para verificar si la fecha cumple con el patrón o formato que establecimos,
  // este metodo regresa un valor booleano, true o false.
  //En este caso si no lo cumple(false), devolvemos null.

  const [dia, mes, año] = fecha.split("/");
  // El método split divide el string de fecha en 3 partes
  // usando el caracter "/" como separador y le asigna un nombre a cada "grupo"

  // Declarar el nombre de los meses en un arreglo
  const nombreMeses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  // Convertir el mes a tipo de dato númerico con parseInt (10, con base decimal)
  // para compararlo con la posición del arreglo donde se encuentra el nombre de los meses
  // Como el indice del arreglo va de 0 a 11, le restamos 1 al número del mes para que
  // estos coincidan.
  const nombreMes = nombreMeses[parseInt(mes, 10) - 1];

  // Concatenamos y devolvemos la fecha en formato "extendido"
  return `${dia} de ${nombreMes} de ${año}`;
}

//Pruebas
//Invacando a la función
let fechaInicial = convertirFecha("31/10/2004");
console.log(fechaInicial);
let fechaInicial2 = convertirFecha("00/00/25");
console.log(fechaInicial2);

// Directo en un clg
console.log(convertirFecha("00/00/2004"));
console.log(convertirFecha("01/12/2004"));
