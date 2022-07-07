import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
};

const anotherFn = async (urlApi) => {
    //Dentro de try va a suceder todo lo que queremos que sea la lógica de nuestra aplicación y en cambie que alguna de estas promesas llegue en un reject pasará a catch, y ahi ira la lógica consecuente a esto. 
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
};

anotherFn(API);