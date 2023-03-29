//Ejemplo declaración variables
function ejemplo1() {
  let datosPersonales = [
    "Pedro",
    "Pérez",
    "pedro_perez21@hotmail.com",
    "Armenia",
  ];
  console.log(
    "Datos personales: " +
    datosPersonales[0] +
    " " +
    datosPersonales[1] +
    "\n" +
    "Correo electrónico:" +
    datosPersonales[2] +
    "\n" +
    "Ciudad:" +
    datosPersonales[3]
  );

  console.log(datosPersonales.length);

  let final = parseInt(prompt("Ingrese la edad de Pedro"));
  datosPersonales.push(final);
  console.log(datosPersonales);

  if (datosPersonales[4] >= 18) {
    console.log(
      datosPersonales[0] + " " + datosPersonales[1] + " es mayor de edad"
    );
  } else {
    console.log(
      datosPersonales[0] + " " + datosPersonales[1] + " es menor de edad"
    );
  }
  //recorrer el arreglo
  for (let index = 0; index < datosPersonales.length; index++) {
    console.log(datosPersonales[index]);
  }
}
const ejemplo2 = () => {
  let estudiantes = [];
  let edades = [];
  let cantidadEstudiante = parseInt(
    prompt("Ingrese la cantidad de estudiantes a agregar en el grupo")
  );
  while (isNaN(cantidadEstudiante)) {
    cantidadEstudiante = parseInt(
      prompt("Ingrese un valor válido en la cantidad de estudiantes")
    );
  }

  for (let index = 0; index < cantidadEstudiante; index++) {
    estudiantes[index] = prompt(
      "Ingrese el nombre del estudiante " + (index + 1)
    );

    while (estudiantes[index] === "") {
      estudiantes[index] = prompt(
        "El nombre no puede estar vacío" +
        "\n" +
        "Ingrese el nombre del estudiante " +
        (index + 1)
      );
    }

    edades[index] = prompt("Ingrese la edad del estudiante " + (index + 1));

    while (isNaN(edades[index])) {
      edades[index] = prompt(
        "Ingrese un valor numérico" +
        "\n" +
        "Ingrese la edad del estudiante " +
        (index + 1)
      );
    }

    while (edades[index] < 0) {
      edades[index] = prompt(
        "El valor no ser menor a cero" +
        "\n" +
        "Ingrese la edad del estudiante " +
        (index + 1)
      );
    }
    console.log(estudiantes[index], edades[index]);
  }
};
//El usuario tiene que ingresar 3 materias al inicio y 2 al final y mostrar el arreglo
function ejercicio1() {
  let materias = [];
  for (let index = 0; index < 5; index++) {
    materias[index] = prompt("Ingrese la materia " + (index + 1));
  }
  console.log(materias);
  for (let adicionarInicio = 0; adicionarInicio < 3; adicionarInicio++) {
    materias.unshift(
      prompt("Ingrese " + (adicionarInicio + 1) + " materia adicional")
    );
  }
  for (let adicionarFinal = 0; adicionarFinal < 2; adicionarFinal++) {
    let final = prompt(
      "Ingrese " + (adicionarFinal + 1) + " materia adicional"
    );
    materias.push(final);
  }
  console.log(materias);
}
function ejercicio2() {
  let numeros = [];
  let posiciones = ["primer", "segundo", "tercer", "cuarto", "quinto", "sexto", "séptimo", "octavo", "noveno", "décimo"];
  let centinela = 0, promedio;
  for (let index = 0; index < 10; index++) {
    do {
      numeros[index] = parseInt(prompt("Ingrese el " + posiciones[index] + " número"));
      console.log(numeros[index]);
    } while (isNaN(numeros[index]));
    centinela = centinela + numeros[index];
  }
  promedio = centinela / 10;
  alert("El promedio de los números ingresados es: " + promedio);
}

/**
 * Ejercicio 3 (21/04/2022) Crear dos arreglos de 5 posiciones, luego hacer las 4 operaciones
 * básicas con los valores almacenados en cada posición
 */
function ejercicio3() {
  let primerosNumeros = [];
  let segundosNumeros = [];
  let posiciones = ["Primer", "Segundo", "Tercer", "Cuarto", "Quinto"];
  let suma, resta, multiplicacion, division;

  for (let index = 0; index < 5; index++) {
    do {
      primerosNumeros[index] = parseInt(prompt("Ingrese el primer grupo de números:" + "\n" + posiciones[index] + " número"));
      console.log(primerosNumeros[index]);
    } while (isNaN(primerosNumeros[index]));
  }

  for (let index = 0; index < 5; index++) {
    do {
      segundosNumeros[index] = parseInt(prompt("Ingrese el segundo grupo de números" + "\n" + posiciones[index] + " número"));
      console.log(segundosNumeros[index]);
    } while (isNaN(segundosNumeros[index]));
  }

  for (let index = 0; index < 5; index++) {
    suma = primerosNumeros[index] + segundosNumeros[index];
    resta = primerosNumeros[index] - segundosNumeros[index];
    multiplicacion = primerosNumeros[index] * segundosNumeros[index];
    if (segundosNumeros[index] == 0) {
      division = " Indefinido";
    }
    else {
      division = primerosNumeros[index] / segundosNumeros[index];
    }
    alert(primerosNumeros[index] + "+" + segundosNumeros[index] + "=" + suma + "\n" + primerosNumeros[index] + "-" + segundosNumeros[index] + "=" + resta + "\n" + primerosNumeros[index] + "*" + segundosNumeros[index] + "=" + multiplicacion + "\n" + primerosNumeros[index] + "/" + segundosNumeros[index] + "=" + division);
  }
}
/*Ejercicio 4--Crear un array con n notas de 0 a 5, calcule el promedio 
de aprobados y el promedio de reprobadose indique la cantidad de cada uno
*/
function ejercicio4() {
  let notas = [];
  let longitud, sumatoriaAprobados = 0, sumatoriaReprobados = 0, acumuladorReprobado = 0, acumuladorAprobado = 0;
  let promedioAprobado, promedioReprobado
  do {
    longitud = parseFloat(prompt("Ingrese la cantidad de notas\nEl valor debe ser superior a 0"));
  } while (isNaN(longitud) || longitud < 0);

  for (let index = 0; index < longitud; index++) {
    do {
      notas[index] = parseFloat(prompt("Ingrese la nota " + (index + 1) + "\nLas notas deben ser del 0 al 5"));
      console.log(notas[index]);
    } while (isNaN(notas[index]) || (notas[index] > 5) || (notas[index] < 0));
    if (notas[index] < 3) {
      sumatoriaReprobados = sumatoriaReprobados + notas[index];
      acumuladorReprobado++;
    }
    else {
      sumatoriaAprobados = sumatoriaAprobados + notas[index];
      acumuladorAprobado++;
    }
  }
  promedioAprobado = (sumatoriaAprobados / acumuladorAprobado).toFixed(2);
  promedioReprobado = (sumatoriaReprobados / acumuladorReprobado).toFixed(2);

  if (isNaN(promedioAprobado)) {
    console.log("El promedio de las notas reprobadas es de: " + promedioReprobado + " , en total reprobaron " + acumuladorReprobado);
  }
  else if (isNaN(promedioReprobado)) {
    console.log("El promedio de las notas aprobadas es de: " + promedioAprobado + " , en total aprobaron " + acumuladorAprobado);
  }
  else {
    console.log("El promedio de las notas aprobadas es de: " + promedioAprobado + " , en total aprobaron " + acumuladorAprobado + "\n" + "El promedio de las notas reprobadas es de: " + promedioReprobado + " , en total reprobaron " + acumuladorReprobado);
  }
}

/**
 * Ejercicio 5 (21/04/2022) Almacenar en un arreglo los nombres de 5 estudiantes ingresados
 * y luego pedir que busque un nombre y recorrer el arreglo para informar si se encuentra o no
 * dentro de los datos almacenados
 */
function ejercicio5() {
  let nombres = [];
  let posiciones = ["Primer", "Segundo", "Tercer", "Cuarto", "Quinto"];
  let buscar;
  for (let index = 0; index < 5; index++) {
    do {
      nombres[index] = prompt("Ingrese el " + posiciones[index] + " nombre").toLowerCase();
    } while (nombres[index] == "" || !isNaN(nombres[index]));

    console.log(nombres[index]);
  }

  do {
    buscar = prompt("Ingrese el nombre a buscar").toLowerCase();
  } while (buscar == "" || !isNaN(buscar));

  let booleano = false;
  for (let index = 0; index < 5; index++) {
    if (buscar === nombres[index]) {
      booleano = true;
      break;
    }
  }
  booleano ? alert("Se encontro el nombre") : alert("No se encontro el nombre");
}

/*Una funcion ejecuta un proceso repetitivo, es necesario definir la funcion, solo puede haber
una funcion por nombre */
//sin parametros
function sumar() {
  let num1 = 5
  let num2 = 2
  let resultado = num1 + num2;
  // alert(`La suma es ${resultado}`)
}
//con parametros
function resta(num1, num2) {
  let resultado = num1 + num2;
  alert(`La resta es ${resultado}`)
}
sumar(8, 9);

function suma_f() {
  let n1 = parseInt(document.getElementById("primer_numero").value);
  while (isNaN(n1)) {
    n1 = parseInt(prompt("Ingrese por favor un valor válido en la primer sección"));
  }
  let n2 = parseInt(document.getElementById("segundo_numero").value);
  while (isNaN(n2)) {
    n2 = parseInt(prompt("Ingrese por favor un valor válido en la segunda sección"));
  }
  document.getElementById("primer_numero").value = n1;
  document.getElementById("segundo_numero").value = n2;
  document.getElementById("resultado").innerHTML = n1 + n2;
}
function resta_f() {
  let n1 = parseInt(document.getElementById("primer_numero").value);
  while (isNaN(n1)) {
    n1 = parseInt(prompt("Ingrese por favor un valor válido en la primer sección"));
  }
  let n2 = parseInt(document.getElementById("segundo_numero").value);
  while (isNaN(n2)) {
    n2 = parseInt(prompt("Ingrese por favor un valor válido en la segunda sección"));
  }
  document.getElementById("primer_numero").value = n1;
  document.getElementById("segundo_numero").value = n2;
  document.getElementById("resultado").innerHTML = n1 - n2;
}

function multiplicacion_f() {
  let n1 = parseInt(document.getElementById("primer_numero").value);
  while (isNaN(n1)) {
    n1 = parseInt(prompt("Ingrese por favor un valor válido en la primer sección"));
  }
  let n2 = parseInt(document.getElementById("segundo_numero").value);
  while (isNaN(n2)) {
    n2 = parseInt(prompt("Ingrese por favor un valor válido en la segunda sección"));
  }
  document.getElementById("primer_numero").value = n1;
  document.getElementById("segundo_numero").value = n2;
  document.getElementById("resultado").innerHTML = n1 * n2;
}
function division_f() {
  let n1 = parseInt(document.getElementById("primer_numero").value);
  while (isNaN(n1)) {
    n1 = parseInt(prompt("Ingrese por favor un valor válido en la primer sección"));
  }
  let n2 = parseInt(document.getElementById("segundo_numero").value);
  while (isNaN(n2)) {
    n2 = parseInt(prompt("Ingrese por favor un valor válido en la segunda sección"));
  }
  if (n1 == 0) {
    document.getElementById("resultado").innerHTML = "Indefinido";
  }
  else {
    document.getElementById("segundo_numero").value = n2;
    document.getElementById("primer_numero").value = n1;
    document.getElementById("resultado").innerHTML = n1 / n2;

  }
}