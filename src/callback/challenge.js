const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/vi';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readySatate === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.resposeText));
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}