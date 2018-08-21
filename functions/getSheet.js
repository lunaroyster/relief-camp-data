const functions = require('firebase-functions');

const gsjson = require('google-spreadsheet-to-json');
const credentials = require('./serviceAccount');
const spreadsheetId = '1NPeYz_nWKW_sbQ2nK4JH2re3hKk2qW4rWjg6Y0HbJW4';

async function getResourcesSheet() {
    let sheet = await gsjson({
        spreadsheetId,
        credentials,
        worksheet: 'Resources  (#RSC)',
        headerStart: 3,
        ignoreRow: [4,5,6]
    });
    return sheet;
}

async function getReliefCampsSheet() {
    let sheet = await gsjson({
        spreadsheetId,
        credentials,
        worksheet: 'Relief Camps (#Camp)',
        headerStart: 1,
        ignoreRow: [2]
    });
    return sheet;
}

async function getVolunteersSheet() {
    let sheet = await gsjson({
        spreadsheetId,
        credentials,
        worksheet: 'Volunteers',
        headerStart: 3,
        ignoreRow: []
    });
    return sheet;
}

module.exports.resources = getResourcesSheet;
module.exports.reliefCamps = getReliefCampsSheet;
module.exports.volunteers = getVolunteersSheet;