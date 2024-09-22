// Sample configuration file for API credentials
require('dotenv').config();

module.exports = {
  motornet: {
    clientId: process.env.MOTONET_CLIENT_ID,
    username: process.env.MOTONET_USERNAME,
    password: process.env.MOTONET_PASSWORD,
    tokenUrl: 'https://webservice.motornet.it/auth/realms/webservices/protocol/openid-connect/token',
  },
};
