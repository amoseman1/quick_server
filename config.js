// Import environement parameters
require("dotenv").config();

server = {
    port: process.env.PORT,
    host: process.env.HOST,
};

module.exports = {
    ...server,
};