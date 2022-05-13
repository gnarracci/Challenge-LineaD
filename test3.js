/*  Un array de números "nums" es un array con supuestamente números enteros distintos que van del 1 hasta la longitud del array, pero hay 
un elemento que está repetido. Retornar la suma del número repetido + el número faltante. Por ejemplo [1,2,2,3,4] devuelve 2+5 que es 7. */

function repeat(data) {

    let duplicates = [];

    for (let i = 0; i < data.length; ++i) {
        if(i + 1 < data.length && data.slice(i+1).indexOf(data[i]) != -1) {
            duplicates.push(data[i]);
        }       
    }

    return duplicates;

}

const myNums = [1,2,2,3,4];
const result = repeat(myNums);
console.log('Array: ',myNums);
console.log('Array length: ',myNums.length);
console.log('Items Duplicated: ', result);

const mynewResult = result.map(function(current) {
    const leng = myNums.length;
    const sum = (current + leng);
    console.log('Sum of the repeated value plus the length of the array: ', sum);
})