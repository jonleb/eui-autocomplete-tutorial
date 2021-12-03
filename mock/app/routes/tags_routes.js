const Tag = require('../models/tag');
const uuid = require('uuid/v1');

module.exports = function (app, db) {
  db.then(db => {

    app.get('/api/tags', (req, res) => {
      res.send(db.get('tags'))
    });

    app.post('/api/tags', (req, res) => {
      db.get('tags')
        .push({ ...Tag, ...req.body, ...{ id: uuid() } })
        .last()
        .write()
        .then(tag => res.send(tag))
    });

  });
};
