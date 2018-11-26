const express = require('express');
const router = express.Router();
const Confession = require('../models/post.js');

router.get('/', (req, res)=> {
  Confession.find({}, (err, foundConfession)=> {
    res.json(foundConfession);
  })
});

router.delete('/:id', (req, res)=> {
  Confession.findByIdAndRemove(req.params.id, (err, deletedConfession)=> {
    res.json(deletedConfession);
  })
})

router.post('/', (req, res)=> {
  Confession.create(req.body, (err, createdConfession) => {
    res.json(createdConfession);
  })
})

router.put('/:id', (req, res) => {
  Confession.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedConfession)=> {
    res.json(updatedConfession)
  })
})

module.exports = router;
