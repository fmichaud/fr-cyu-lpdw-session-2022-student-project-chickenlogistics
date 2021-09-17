const express = require('express');
const router = express.Router();

const db = require('../../config/databases');
const {City} = require('../models');

router.get('/', (req, res, next) => {
  City.findAll()
    .then(cities => {
      console.log(cities)
      res.status(200).json(cities);
    })
    .catch(err => console.error(err))
})

/**
 A ne pas utiliser tout de suite ! pour demi-journée 6.

router.get('/async', async (req, res, next) => {
  try {
    let cities = await City.findAll()
    res.sendStatus(200)
  } catch (e) {
    console.error(`Error:`)
    throw e
  }
})
 */

module.exports = router
