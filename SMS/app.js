const axios = require("axios");
const API_KEY = "k8gboj7kpx2agph6zg830670jjf49n4gsh5ikmt0doyq4vhjobfjn9r2gczfbkttensyt0rofo8dskp5dn9jslpdbe3h0qxau9j9";

const data = {
    numero: "1167081145",
    texto: "Su pedido ha llegado",
};

const axiosClient = axios.create({ baseURL: 'http://servicio.smsmasivos.com.ar' });

axiosClient.post(`/enviar_sms.asp?api=1&apikey=${API_KEY}&tos=${data.numero}&texto=${data.texto}`);
