const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
    // format data json
    const data = {
        caption: "Mahasiswa",
        layout: "layouts/main-layout",
        data: [
            {
                npm: "2226240090",
                nama: "Jessica"
            },
            {
                npm: "2226240061",
                nama: "Fiolin"
            },
            {
                npm: "2226240125",
                nama: "Cyndi"
            }
        ]
    };
    res.render('index', data);
    // menuju ke views/index.ejs
});

module.exports = router;