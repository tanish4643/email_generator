const express = require('express');
const router = express.Router();
const service = require('./service');

router.post('/generate', generateDomain);

function generateDomain(req, res, next) {
    service.generateDomain(req.body)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

module.exports = router;