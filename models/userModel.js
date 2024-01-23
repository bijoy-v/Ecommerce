const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  profile:{
    type:String,
  },
address:{
    type:String,
},
pincode:{
    type:Number,
},
district:{
    type:String,
},
state:{
    type:String,
}
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel
