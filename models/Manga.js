import {Schema, model} from "mongoose";

let collection  = 'mangas';

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

let Manga = model(collection, schema);

export default Manga;