const Record = require('../model/recordModel');

exports.searchAll = (req, res) => {
    Record.Model.find()
      .then(Record => {
        res.json({
          status: 'success',
          message: 'Records retrieved successfully',
          data: Record,
        });
      })
      .catch(err => {
        res.json({
          status: 'error',
          message: err,
        });
      });
  };


  
exports.searchById = (req, res) => {
    Record.Model.find({ _id: req.params.id })
      .then(Record => {
        res.json({
          status: 'success',
          message: 'Records retrieved successfully',
          data: Record,
        });
      })
      .catch(err => {
        res.json({
          status: 'error',
          message: err,
        });
      });
  };
  
  exports.delete = function(req, res) {
    Record.Model.deleteOne(
      {
        _id: req.query.id,
      },
      function(err) {
        if (err) {
          res.json({
            status: 'error',
            message: err,
          });
        } else {
          res.json({
            message: 'Record deleted',
            status: 'success',
          });
        }
      },
    );
  };
  
  exports.new = function(req, res) {
    Record.Model.insertMany(req.body, function(err, data) {
      if (err) {
        res.json({
          status: 'error',
          message: err,
        });
      } else {
        res.json({
          status: 'success',
          message: 'Record Created',
          data,
        });
      }
    });
  };
  
  exports.update = function(req, res) {
    Record.Model.updateOne(
      { _id: req.body.params.id },
      req.body.params.data,
      { new: true },
      function(err, Record) {
        if (err) {
          res.json({
            status: 'error',
            message: err,
          });
        } else {
          res.json({
            message: 'Record Updated',
            data: Record,
            status: 'success',
          });
        }
      },
    );
  };
  