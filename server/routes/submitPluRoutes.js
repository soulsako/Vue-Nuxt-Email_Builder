const express = require('express')
const route = express.Router()
const fredHopper = require('../services/fredHopper')

route.post('/', (req, res) => {
  const data = req.body;

  const location = fredhopper.getAccess(data.site, data.iso).pop();

  if (!location) {
    return res.json({
      message: 'invalid url'
    });
  }

  let fhLocation = data.site;

  if (location.iso !== 'gb') {
    fhLocation = data.site + location.iso;
  }

  let plus = data.plus;

  const splitPlus = plus.split(',');

  if (splitPlus.length > 19) {
    return res.status(500).json({
      error: 'maximum 19 plus at a time'
    });
  }

  if (location.iso !== 'gb') {
    plus = splitPlus.map(plu => `${plu}_${fhLocation}`).join(',');
  }

  return fredhopper
    .query({
        site: data.site,
        location,
        fhLocation
      },
      `secondid<{${plus}}`
    )
    .then(result => {
      const thisUniverse = result.page.universes[0].universe
        .filter(universe => universe.$.name === fhLocation)
        .pop();

      const itemSection = thisUniverse['items-section'][0];

      return {
        products: itemSection.items[0].item || []
      };
    })
    .then(dirtyObj => {
      const cleanItems = {};

      cleanItems.products = [];

      dirtyObj.products.forEach(product =>
        cleanItems.products.push(fredhopper.cleanProductData(product))
      );

      return {
        products: cleanItems.products.reverse()
      };
    })
    .then(clean => res.json(clean))
    .catch(err => {
      res.status(500).json({
        message: err.toString()
      });
    });
})

module.exports = route;




