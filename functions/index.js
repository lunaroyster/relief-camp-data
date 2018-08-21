const functions = require('firebase-functions');
const getSheet = require("./getSheet");

exports.getResourcesSheet = functions.https.onRequest(async (req, res) => {
    res.send(await getSheet.resources());
});

exports.getReliefCampsSheet = functions.https.onRequest(async (req, res) => {
    res.send(await getSheet.reliefCamps());
});

exports.getVolunteersSheet = functions.https.onRequest(async (req, res) => {
    res.send(await getSheet.volunteers());
});
