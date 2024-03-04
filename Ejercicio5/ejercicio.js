/*
 *Ejercicio 5
 6. Muestre todos los números divisores de un
numero que mete en prompt.*/
// document.addEventListener("DOMContentLoaded", function () {
//   const x = prompt("Ingrese numero");
//   let numero = parseInt(x);
//   let divisores = [];

//   for (let i = 1; i <= numero; i++) {
//     if (numero % i == 0) {
//       divisores.push(i);
//     }
//   }

//   console.log(`Los divisores de ${numero} son: ${divisores.join(", ")}`);

//   let title = document.querySelector(".title");
//   title.textContent = divisores.join(", ");
// });

/*
 *Ejercicio 6
 7. Programa que nos diga si un numero es par o
impar:
7.1 . Ventana prompt
.2. Si no es valido que nos pida de nuevo el numero
 */
//
//   const numero = () => {
//     let x = prompt("Ingrese numero");
//     if (!isNaN(x)) {
//       if (x % 2 == 0) {
//         alert("El numero es par");
//       } else if (x % 2 == 1) {
//         alert("El numero es impar");
//       }
//     } else {
//       numero();
//     }
//   };

//   numero();
//

/*
 * Ejercicio 7
8. Tabla de multiplicar de un numero introducido por
pantalla.
 */

// const numero = prompt("Ingrese numero");
// const table = (numero) => {
//   let array = [];
//   for (let i = 0; i <= 12; i++) {
//     array.push(i * numero);
//   }
//   alert(`La tabla de ${numero} es : ${array.join(", ")}`);
// };
// table(numero);

/*
 *Ejercicio 8
 9. Calculadora:
- Pida dos números por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultado
de sumar, restar, multiplicar y dividir esas dos cifras
- refactoriza el código para encapsularlo todo en funciones reutilizables
 */

const validar_numero = () => {
  let numero = prompt("Ingrese el primer numero");
  if (isNaN(numero)) {
    validar_numero();
  } else {
    const validar_numero2 = () => {
      let numero2 = prompt("Ingrese el segundo numero");
      if (isNaN(numero2)) {
        validar_numero2();
      } else {
        numero2 = parseFloat(numero2);
        numero = parseFloat(numero);
        alert(`La multiplicacion es: ${numero2 * numero};
        La suma es : ${numero + numero2}`);
      }
    };
    validar_numero2();
  }
};

validar_numero();
