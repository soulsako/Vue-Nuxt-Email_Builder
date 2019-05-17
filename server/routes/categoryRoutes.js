const express = require('express');
const router = express.Router()
const Categories = require('../models/categories')

router.get('/:id', (req, res) => {
  // res.send('Hello world');
  const obj = req.params;
  const operation = obj.id === 'all' ? Categories.find() : Categories.findById({_id: id});
  operation.exec().then((doc) => {
    res.send(doc)
  })
  .catch(error => console.log(error));
});

module.exports = router;