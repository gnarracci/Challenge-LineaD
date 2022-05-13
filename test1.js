/* Escribir una función que reciba un entero positivo y que devuelva la potencia de 2 más cercana que sea menor o igual a dicho entero. */

function potenciaDos(num) {
  if (typeof num != "number" || !Number.isInteger(num)) {
    throw TypeError("El argumento debe ser un numero");
  }

  let pot = num ** 2;

  let proxMen = pot / 2;

  return proxMen;
}

try {
  console.log(potenciaDos(4));
} catch (e) {
  console.log(e.message);
}
