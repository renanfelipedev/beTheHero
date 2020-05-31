module.exports = {
  jwt: {
    secret: process.env.SECRET || 'um4.5tr1ng.un1c4',
    expiresIn: '7d',
  },
};
