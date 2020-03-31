const crypto = require('crypto');

const generateUniqueId = () => crypto.randomBytes(4).toString('hex');

module.exports = generateUniqueId;
