'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = Schema({
  username:  {type: String, unique:true, required: true},
  firstName:  {type: String, required: true},
  lastName: {type: String, required: true},
  password:  {type: String, unique:true, required: true}
})


module.exports = mongoose.model('User', UserSchema);
