import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//Vamos a crear una función que va a recibir como argumento la url de nuestra API, y esto nos va a retornar el llamado de fetch que no es más que una promesa, por lo tanto vamos a poder utilizar los métodos then() cath() o finally() y con esto hacer multiples elementos para el llamado de; el primer recurso (productos), el segundo (un producto en particular) y el tercero (la categoría a la que pertenece el segundo recurso).
function fetchData(urlAPI) {
    return fetch(urlAPI);
};

fetchData(`${API}/products`)
    .then(response => response.json())
    //Solicitamos que nos devuelva todos los productos de la API
    .then(products => {
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`);
    })
    .then(response => response.json())
    //Solicitamos que nos traiga la categoría de un producto
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`);
    })
    .then(response => response.json())
    //Solicitamos el nombre del producto en la categoria
    .then(category => {
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('The promise is finally'))