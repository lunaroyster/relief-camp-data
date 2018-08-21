const functions = require('firebase-functions');
const getSheet = require("./getSheet");
const cors = require('cors')({origin: true});

exports.getResourcesSheet = functions.https.onRequest(async (req, res) => {
    cors(req, res, () => {});
    if(req.method=='OPTIONS') return;
    res.set('Cache-Control', 'public, max-age=300, s-maxage=300');
    res.send(await getSheet.resources());
});

exports.getReliefCampsSheet = functions.https.onRequest(async (req, res) => {
    cors(req, res, () => {});
    if(req.method=='OPTIONS') return;
    res.set('Cache-Control', 'public, max-age=300, s-maxage=300');
    res.send(await getSheet.reliefCamps());
});

exports.getVolunteersSheet = functions.https.onRequest(async (req, res) => {
    cors(req, res, () => {});
    if(req.method=='OPTIONS') return;
    res.set('Cache-Control', 'public, max-age=300, s-maxage=300');
    res.send(await getSheet.volunteers());
});
