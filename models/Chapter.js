import { Schema, model } from "mongoose";

let collection = 'chapter'

let schema = new Schema({ 
    manga_id: {type: String, required: true},
    title: {type: String, required: true},
    cover_photo: {type: String, required: true},
    pages: {type: Array, required: true},
    order: {type: Number, required: true},
},
{
    timestamps: true,
});

let Chapter = model(collection, schema);

export default Chapter;