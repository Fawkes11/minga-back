import {Schema, model} from "mongoose";

let collection  = 'mangas';

let schema = new Schema({ 
    author_id: {type: String, required: true},
    company_id: {type: String, required: false},
    title: {type: String, required: true},
    cover_photo: {type: String, required: true},
    description: {type: String, required: true},
    category_id: {type: String, required: true},
},
{
    timestamps: true,
});

let Manga = model(collection, schema);

export default Manga;