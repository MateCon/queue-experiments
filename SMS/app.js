const axios = require("axios");
const API_KEY = "k8gboj7kpx2agph6zg830670jjf49n4gsh5ikmt0doyq4vhjobfjn9r2gczfbkttensyt0rofo8dskp5dn9jslpdbe3h0qxau9j9";

const data = {
    numero: "1167081145",
    texto: "Su pedido ha llegado",
};

// const axiosClient = axios.create({ baseURL: 'http://servicio.smsmasivos.com.ar' });
// axiosClient.post(`/enviar_sms.asp?api=1&apikey=${API_KEY}&tos=${data.numero}&texto=${data.texto}`);

// const axiosClient = axios.create({
//     baseURL: 'http://mayten.cloud',
//     headers: { 'Content-Type': 'application/json' }
// });
// axiosClient.post(`/auth`, { username: "matiasrsz", password: "mrz*8899" })
//     .then(res => {
//         console.log(res.data);
//     });

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjI5NSIsInVzZXJuYW1lIjoiTWF0aWFzUlNaIiwiY2xpZW50X2lkIjoiMjk3NCIsInBlcm1pc3Npb25zIjoiMSIsIm5iZiI6MTcwNjgyNDU4MCwiZXhwIjoxNzA2OTEwOTgwLCJpc3MiOiJodHRwOi8vbWF5dGVuLmNsb3VkIiwiYXVkIjoiaHR0cDovL21heXRlbi5jbG91ZCJ9.63LfrQ78xI_1bHufG7m8tm2e4KVQd15M0qENHZqpj3o';

const axiosClient = axios.create({
    baseURL: 'http://mayten.cloud',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});
axiosClient.post(`/api/Mensajes/Transaccional`, {
    origen: "SMS_CORTO",
    mensajes: [{
        mensaje: "Hola, probando probando",
        telefono: "1167081145",
        identificador: "Mate",
        source: "Enevel"
    }],
    dataCoding: "Default"
  })
    .then(res => {
        console.log(res.data);
    });