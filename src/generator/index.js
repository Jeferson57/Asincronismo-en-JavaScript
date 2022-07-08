//El * sirve para decirle a la función que sera un generator
function* gen() {
    //Esta palabra nos permite tener estos step / pausas
    //En este caso estamos retornando un valor númerico en cada uno de ellos
    yield 1;
    yield 2;
    yield 3;
};

const g = gen();
/* El método next() nos devuelve cada uno de los valores de
los tield pero uno por uno, y debemos hacer otra vez el uso
de next() para obtener el siguiente valor. */
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

//Ejemplo
function* iterate(array) {
    for (const iterator of array) {
        yield iterator;
    }
};

const it = iterate(['Juan', 'Carlos', 'Maria', 'Nicole', 'Noe']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);