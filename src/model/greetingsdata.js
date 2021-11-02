const mongoose= require('mongoose');
mongoose.connect("mongodb+srv://userone:userone@cluster0.f0m8q.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority");

const Schema= mongoose.Schema;
const greetingschema= new Schema(
    {
        //from:String,
        user:String,
        email:String
    }
);
var greetingsdata= mongoose.model('greetingsData',greetingschema);

module.exports=greetingsdata;