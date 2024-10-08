const moongoose = require('mongoose');

const bukuSchema = new moongoose.Schema(
    {
        judul: {
            type: String,
            required: true
        },
        penulis: {
            type: String,
            required: true
        },
        genre: [{
            type: String,
            required: true
        }]
    }
);

module.exports = moongoose.model('Buku', bukuSchema);