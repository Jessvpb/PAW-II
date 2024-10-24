var express = require('express');
var router = express.Router();

const UmkmController = require('../controller/umkm');
const umkm = require('../model/umkm');

router.get('/', UmkmController.selectUmkm);

module.exports = router;