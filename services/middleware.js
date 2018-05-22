var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config');

function ensureAuthenticated(req, res, next) {
  if(!req.headers.authorization || req.headers.authorization.split(" ")[1] == undefined) {
    return res
      .status(403)
      .send({message: "Tu petición no tiene cabecera de autorización"});
  }
  var token = req.headers.authorization.split(" ")[1];
  var payload = jwt.decode(token, config.TOKEN);

  if(payload.exp <= moment.utc().unix()) {
     return res
     	.status(401)
        .send({message: "El token ha expirado"});
  }

  req.user = payload.sub;
  next();
}

module.exports = {
  ensureAuthenticated
}
