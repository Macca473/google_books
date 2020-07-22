const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

const db = require('./modules/initcont.js');

router.get('/api/books', function(req, res) {
  db.findAll()
  .then(database => {
      res.json({books: database,
      })
  })
  .catch(err => {
      res.json({
          confirmation: 'fail',
      })
  })
});

router.post('/api/books', function(req, res) {
  db.findAll()
  .then(database => {
      res.json(database)
  })
  .catch(err => {
      res.json({
          confirmation: 'fail',
      })
  })
});

router.delete('/api/books/:id', function(req, res) {
  const id = req.params.id

  db.findAll(id)
  .then(database => {
      res.json(database)
  })
  .catch(err => {
      res.json({
          confirmation: 'fail',
      })
  })
});


// Send every other request to the React app

app.use(router);



// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
