const User = require('../models/user')

function getUser(userId, next){
  User.findById(userId, next);
}

function getUserByUsername(username, next){
  User.findOne({ 'username': username }, '_id password firstName', next);
}

function addUser(userInfo, next){
  if(!userInfo.username || !userInfo.firstName || !userInfo.lastName || !userInfo.password ){
    next('Los campos requeridos no están completos');
    return;
  }
  let user = new User();
  user.username = userInfo.username;
  user.firstName = userInfo.firstName;
  user.lastName = userInfo.lastName;
  user.password = userInfo.password;
  user.save(next);
}


function getAllUsers(next){
  User.find({}, '_id username firstName lastName', next);
}

function deleteUser(userId, next){
  User.deleteOne({'_id': userId}, next);
}

module.exports = {
  getUser,
  getUserByUsername,
  getAllUsers,
  addUser,
  deleteUser
}
