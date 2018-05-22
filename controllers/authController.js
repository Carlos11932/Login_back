const UserRepository = require('../repositories/userRepository')
const authService = require('../services/authService')

function login(req, res){
  let username = req.body.username;
  let password = req.body.password;
  UserRepository.getUserByUsername(username, (err, user) =>{
    if(user && password == user.password){
      res.status(200).send({firstName: user.firstName, userId: user._id, token: authService.createToken(user._id)});
    }
    else{
      res.status(404).send({message: `Error al hacer log in:`});
    }
  });
}

module.exports = {
  login
}
