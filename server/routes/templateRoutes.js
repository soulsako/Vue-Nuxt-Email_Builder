const express = require('express');
const router = express.Router()
const Templates = require('../models/templates');

router.get('/fascia/:id', (req, res) => {

  const id = req.params.id;
  Templates.find({fascia_id: id})
  .exec().then(doc => {
    if(!doc){
      res.status(404).send();
    }
    res.send(doc)
  })
  .catch(error => console.log(error))
});
// Order is important. If the below route is added before all other routes 
//express will treat everything after /api/templates as the id
router.get('/:id', (req, res) => {

  const obj = req.params;
  const operation = obj.id === 'all' ? Templates.find() : Templates.findById({_id: obj.id});
  operation.exec().then(doc => {
    res.send(doc)
  })
});


module.exports = router;

