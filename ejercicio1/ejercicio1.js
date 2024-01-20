`use strict`

//Ingresar un nombre con promp y verificar si el nombre ingresado se encuentra en el vector

let students = ["Juan","Jose","Pedro","Maria","Alejandra"];

let nombreBuscado = prompt("Ingrese un nombre:");
//Mostrar en un alert: "Si se encuentra" o "No se encuentra"

if (students.includes(nombreBuscado)) {
    alert("Si se encuentra en la lista.");
  } else {
    alert("No se encuentra en la lista.");
  }