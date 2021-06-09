const { getData, postData, deleteData } = require('../controllers/data');
const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(getData)
  .post(postData);

router
  .route('/:id')
  .delete(deleteData);

module.exports = router;