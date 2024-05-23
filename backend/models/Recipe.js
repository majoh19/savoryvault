const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const RecipeSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true,
})

const RecipeModel = model('Recipe', RecipeSchema)

module.exports = RecipeModel