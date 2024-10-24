const mongoose = require('mongoose');

const umkmSchema = new mongoose.Schema(
    {
        namaUmkm: {
            type: String,
            required: true
        },
        nis: {
            type: String,
            required: true
        },
        kecamatan: {
            type: String,
            required: true
        },
        kelurahan: {
            type: String,
            required: true
        },
        pemilik: [{
            type: String,
            required: true
        }]
    }
);

module.exports = mongoose.model('Umkm', umkmSchema);