const promise = new Promise((resolve, reject) => {
    resolve('Hey!');
});

const cows = 9;

//Si tenemos 15 vacas, eso significa que podemos cumplir con los litros de leche solicitados. 
//Pero, si tenemos menos de 15 vacas eso significa que no podes cumplir con los litros de leche, así que nuestra lógica dentro de la promesa va ser rechazada
const countCows = new Promise((resolve, reject) => {
    if (cows >= 15) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject(`There aren´t enough cows`);
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));