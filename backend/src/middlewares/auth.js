module.exports = async (request, response, next) => {
  try {
    const authId = request.headers.authorization;

    if (!authId) {
      return response.status(401).json({ error: 'Please log in.' });
    }

    request.LoggedOngId = authId;

    return next();
  } catch (error) {
    return response.status(401).json({ error: 'Something wrong.' });
  }
};
