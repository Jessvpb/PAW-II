const Umkm = require('../model/umkm');

const selectUmkm = (req, res) => {
    Umkm.find()
    .then((documents)=>{
        res.status(200).json({
            message: "Get Data UMKM",
            umkms : documents
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message : "Internal Server Error",
            error : err
        });
    });
};

module.exports = {selectUmkm};