const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TodoSchema= new Schema({
    title :{
        type: String,
        required:true,
        trim:true,
    },
    complete:{
        type: Boolean,
        default:false,
    }
})

const Todo = mongoose.model("Todo" , TodoSchema);

module.exports = Todo;

// 64d0e27dac5c8b8eb186ff66