const UserRepository = require('../repositories/userRepository')
const authService = require('../services/authService')

function create(req, res){
  let userInfo = req.body;
  UserRepository.addUser(userInfo, (err, userStored) =>{
    if(err){
      res.status(500).send({message:`Error al guardar en DB: ${err} `});
    }
    else{
      res.status(200).send({userId: userStored._id, token: authService.createToken(userStored._id)});
    }
  });
}

function getUsers(req, res){
  UserRepository.getAllUsers((err, users) =>{
    if(err){
      res.status(500).send({message:`Error al realizar la petición ${err}`});
    }
    else{
      res.status(200).send({users: users});
    }
  })
}

function deleteUser(req, res){
  let userId = req.params.userId;
  UserRepository.deleteUser(userId, (err, user) =>{
    if(err){
      res.status(500).send({message:`Error al realizar la petición ${err}`});
    }
    else{
      res.status(200).send({user: user});
    }
  })
}


module.exports = {
  create,
  getUsers,
  deleteUser
}
