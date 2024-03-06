/*1. Programa que pida dos números y que nos diga
cual es el mayor, el menor y si son iguales.*/
/*2. Al programa anterior: Si los numeros no son un
número o son menores o iguales a cero, nos los
vuelva a pedir.*/
/*
 *aaaaaa Ejercicio 1
 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const ejercicio2 = (a, b) => {
//   a = parseFloat(a);
//   b = parseFloat(b);
//   if (!isNaN(a) && !isNaN(b)) {
//     if (a > b) {
//       console.log(`El numero mayor ${a}`);
//     } else if (b > a) {
//       console.log(`El numero mayor es ${b}`);
//     } else {
//       console.log("Los numeros son iguales");
//     }
//   } else {
//     console.log("Digite numero validos");
//   }
// };

// rl.question("Digite el primer numero: ", (a) => {
//   rl.question("Digite el segundo numero : ", (b) => {
//     ejercicio2(a, b);
//   });
// });

/*
 *Ejercicio 2
 */
/* 3. Utilizando un bucle, mostrar la suma y la media de
los números introducidos hasta introducir un
numero negativo y ahí mostrar el resultado. */
// let suma = 0;
// let contador = 0;
// const leer_numero = () => {
//   rl.question("Digite un numero: ", (x) => {
//     x = parseFloat(x);
//     suma = suma + x;
//     contador++;
//     mostrar_numero(suma, x, contador);
//   });
// };

// const mostrar_numero = (suma, x, contador) => {
//   if (x < 0) {
//     console.log("El numero es negativo");
//     rl.close();
//   } else if (isNaN(x)) {
//     console.log("No es un numero");
//     rl.close();
//   } else {
//     console.log("La media es: " + suma / contador);
//     console.log("La suma es: " + suma);
//     leer_numero();
//   }
// };

// leer_numero();
/*
 *Ejercicio 3
 4. Hacer un programa que muestre todos los
números entre dos números introducidos por el
usuario.
 */

// rl.question("Ingresa primer numero:", (x) => {
//   rl.question("Ingrese segundo numero:", (y) => {
//     x = parseFloat(x);
//     y = parseFloat(y);
//     if (x > y) {
//       console.log(`Los numeroes entre ${x} ${y} son: `);
//       for (i = y; i <= x; i++) {
//         console.log(` ${i}`);
//       }
//       rl.close();
//     } else if (y > x) {
//       console.log(`Los numeroes entre ${y} ${x} son: `);
//       for (i = x; i <= y; i++) {
//         console.log(` ${i}`);
//       }
//       rl.close();
//     } else if (isNaN(x) || isNaN(y)) {
//       console.log("Numero no es valido");
//       rl.close();
//     } else {
//       console.log("Numero son iguales");
//       rl.close();
//     }
//   });
// });

/*
*Ejercicio 4
5. Mostrar todos los números impares que hay entre
dos números introducidos por el usuario.
*/
// rl.question("Ingresa primer numero:", (x) => {
//   rl.question("Ingrese segundo numero:", (y) => {
//     x = parseFloat(x);
//     y = parseFloat(y);
//     if (x > y) {
//       console.log(`Los numeroes entre ${x} ${y} impares son: `);
//       for (i = y; i <= x; i++) {
//         if (i % 2 == 1) {
//           console.log(` ${i}`);
//         }
//       }
//       rl.close();
//     } else if (y > x) {
//       console.log(`Los numeroes entre ${y} ${x} impares son: `);
//       for (i = x; i <= y; i++) {
//         if (i % 2 == 1) {
//           console.log(` ${i}`);
//         }
//       }
//       rl.close();
//     } else if (isNaN(x) || isNaN(y)) {
//       console.log("Numero no es valido");
//       rl.close();
//     } else {
//       console.log("Numero son iguales");
//       rl.close();
//     }
//   });
// });

/*
 *Ejercicio Palindromo
 */
/*
 *Palindromo por consola
 */
// const palindromo = (palabra) => {
//   const word = palabra.replace(/ /g, "").toLowerCase();
//   const cadenaReversa = word.split("").reverse().join("");
//   return cadenaReversa == word;
// };
// console.log(palindromo("ac"));

/*
 *Palindromo por rl
 */
// const palindromo = (palabra) => {
//   const word = palabra.replace(/ /g, "").toLowerCase();
//   const cadenaReversa = word.split("").reverse().join("");
//   console.log(
//     palabra == cadenaReversa ? "Sí es palíndromo" : "No es palíndromo"
//   );
// };

// const obtenerPalabra = async () => {
//   return rl.question("Escribe una palabra: ");
// };

// const verificarPalindromo = async () => {
//   const palabra = await obtenerPalabra();
//   palindromo(palabra);
// };

// verificarPalindromo();

/*
 *Verificar  si un numero es primo
  
 */
// const primo = (x) => {
//   if (x <= 1) return false;
//   console.log(x);
//   for (let i = 2; i <= Math.sqrt(x); i++) {
//     if (x % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(primo(8));

function countItems(x) {
  return x.toString().length;
}

console.log(countItems(19000));
console.log(countItems("Hola mundo"));
