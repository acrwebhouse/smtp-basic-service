require('dotenv').config()
exports.config = {
    'serverIp':process.env.SERVER_IP || '127.0.0.1',
    'serverPort': process.env.SERVER_PORT || 15000,
    'swaggerIp':process.env.SWAGGER_IP || '127.0.0.1',
    'serverMail':'acr.webhouse@gmail.com',
    'serverMailKey':'tzfjujuqlzejtbkp'
}