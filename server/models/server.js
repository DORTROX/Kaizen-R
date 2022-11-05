const mongoose = require('mongoose');
const ServerSchema  = new mongoose.Schema({
name :{
      type  : String,
      required : true
} ,
pfp : {
    type: String,
    required: true
} ,

status: {
    type: Array,
    required: true,
},
members : {
    type: Array,
    required: true
}
});
const User= mongoose.model('Server',ServerSchema);

module.exports = User;