const axios = require('axios');
const { getToken } = require('../utils/tokenUtils');

const fetchCarMakes = async () => {
    console.log("hello")
    const token = await getToken();
    const response = await axios.get(`https://webservice.motornet.it/api/v3_0/rest/public/usato/auto/marche`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

const fetchCarYears = async (makeId) => {
    const token = await getToken();
    const response = await axios.get(`https://webservice.motornet.it/api/v3_0/rest/public/usato/auto/anni?codice_marca=${makeId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

const fetchCarModels = async (makeId, year) => {
    const token = await getToken();
    const response = await axios.get(`https://webservice.motornet.it/api/v3_0/rest/public/usato/auto/modelli?codice_marca=${makeId}&anno=${year}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

// Function to fetch available versions for the selected model and year
const fetchCarVersions = async (modelId, year) => {
    const token = await getToken();
    const response = await axios.get(`https://webservice.motornet.it/api/v3_0/rest/public/usato/auto/versioni`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
            codice_modello: modelId,
            anno: year,
        },
    });
    return response.data;
};

const fetchTechnicalDetails = async (versionId) => {
    const token = await getToken();
    const response = await axios.get(`https://webservice.motornet.it/api/v3_0/rest/public/usato/auto/dettaglio/aggiuntivo?codice_motornet_uni=${versionId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

module.exports = {
    fetchCarMakes,
    fetchCarYears,
    fetchCarModels,
    fetchCarVersions,
    fetchTechnicalDetails,
};
