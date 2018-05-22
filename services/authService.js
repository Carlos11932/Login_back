const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken(userId){
  let payload = {
    sub: userId,
    iat: moment.utc().unix(),
    exp: moment.utc().add(20, "minutes").unix()
  }
  return jwt.encode(payload, config.TOKEN)
}


module.exports = {
  createToken
}
