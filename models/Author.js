import { Schema, model} from "mongoose";

let collection = 'author'

let schema = new Schema({
    name: {type: String, required: true},
    last_name: {type: String, required: false},
    city: {type: String, required: true},
    country: {type: String, required: true},
    date: {type: String, required: false},
    photo: {type: String, required: true},
    user_id: {type: String, required: true},
    active: {type: Boolean, required: true}
},
{
    timestamps: true,
})

let Author = model(collection, schema);

export default Author;