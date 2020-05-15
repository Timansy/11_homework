// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var notesArray = require("../db/db");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notesArray);
  });

  app.post("/api/notes", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    notesArray.push(req.body);
    res.json(true);
  });

  app.delete("/api/notes/:_id", function (req, res) {
    let id = req.params._id;
    notesArray = notesArray.filter(function (note) {
      return note.id !== id;
    });
    console.log(notesArray);
    res.json(true);
  });
};
