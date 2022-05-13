/* Estás en una fila de cuadrados. Cada cuadrado es un elemento de un array. En cada elemento del array se indica un número positivo que 
son la cantidad de cuadrados que podés avanzar. Dado un array de números positivos definir si es posible llegar hasta la última posición 
del array. Por ejemplo [1,3,1,1,2] retorna true */

const myArray = [1,2,1,1,3];

function tourArray(nums) {
    
    if(myArray.indexOf(nums) > -1) {
        return true;            
    } else {
        return false;
    }

}

try {
    console.log(tourArray(1));
} catch (error) {
    console.log((error) => error);
}