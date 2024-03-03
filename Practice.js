let username = "OREJERAS";
console.log(username);
const names = ["aaaaaaaa", "bbbbbbbbbbb", "ccccccccc"];
for (let index = names.length - 1; 0 <= index; index--) {
  const name = names[index];
  console.log(name);
  console.log(`${name}nuevo`);
}

const showUser = (username, userage) =>
  `EL usuario: ${username} tiene ${userage} `;

function showUser2(username, userage) {
  return `EL usuario: ${username} tiene ${userage} `;
}

console.log(showUser("Orejas", 8));
console.log(showUser2("Orejas", 580));

/* Ejerciio 1 */
function obtenerDatosPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "datoas importaaaaaaaantes" });
    }, 100);
  });
}

obtenerDatosPromise().then((info) => {
  console.log(info);
});

/* Ejerciio 2 */
const numeros = [0, 1, 2, 3];
const resultado = numeros.filter((x) => true);
console.log(resultado);

const numeros2 = [0, 1, 2, 3, 4, 5];
const resultado2 = numeros2.filter((elem, idx) => elem * idx);
console.log(resultado2);

const ordernar = [8, 99, 1, 3, 45, 5];
ordernar.sort((a, b) => b - a);
console.log(ordernar);
