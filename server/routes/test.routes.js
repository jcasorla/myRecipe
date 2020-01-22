const express = require('express');
const router = express.Router();
const tests = require('./../controllers/tests');

router.get('/', tests.all)
    .get('/:id', tests.getOneById)
    .post('/', tests.create)
    .put('/:id', tests.update)
    .delete('/:id', tests.delete)

module.exports = router;
