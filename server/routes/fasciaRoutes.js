const express = require('express');
const router = express.Router()
const Fascias = require('../models/Fascias')

router.get('/fascias/:id', (req, res) => {
  // res.send('Hello world');
  const obj = req.params;
  const operation = obj.id === 'all' ? Fascias.find() : Fascias.findById({_id: id});
  operation.exec().then((doc) => {
    res.send(doc)
  })
});

module.exports = router;