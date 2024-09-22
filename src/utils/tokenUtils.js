const axios = require('axios');
const dotenv = require('dotenv');
const qs = require('qs');
dotenv.config();
let token = null;
let tokenExpiry = null;
const data = qs.stringify({
    grant_type: 'password',
    client_id: 'webservice',
    username: 'pccarmnt7',
    password: "etaxws77",
});

const config = {
    method: 'post',
    url: 'https://webservice.motornet.it/auth/realms/webservices/protocol/openid-connect/token',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
};

const getToken = async () => {
    const now = new Date().getTime();

    if (token && tokenExpiry > now) {
        return token; // Return cached token if valid
    }

    // Fetch a new token if the current one has expired or doesn't exist
    const response = await axios(config)

    token = response.data.access_token;
    tokenExpiry = now + response.data.expires_in * 1000; // Token expiry in milliseconds

    return token;
};

module.exports = { getToken };
