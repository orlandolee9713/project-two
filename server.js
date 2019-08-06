// console.log(process.env.MONGODB_URI);
//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const morgan = require('morgan');
const app = express ();
const db = mongoose.connection;
const People = require('./models/people.js');
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Fix Depreciation Warnings from Mongoose*
// May or may not need these depending on your Mongoose version
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.use(morgan('tiny'));
const peopleController = require('./controllers/people.js');
app.use('/people', peopleController);
//___________________
// Routes
//___________________
//localhost:3000
// NEW ROUTE
// app.get('/people/new', (req, res) => {
//   res.render('new.ejs');
// });
// // INDEX ROUTE
// app.get('/people' , (req, res) => {
//   People.find({}, (err, findPeople) => {
//     res.render('index.ejs',
//     {
//       people: findPeople
//     }
//   )
//   })
// });
// // SHOW ROUTE
// app.get('/people/:id', (req, res) => {
//   People.findById(req.params.id, (err, foundPeople) => {
//     res.render(
//       'show.ejs',
//     {
//       people: foundPeople
//     }
//   );
// });
// });
// // DELETE ROUTE
// app.delete('/people/:id', (req, res) => {
//   console.log(req.params.id);
//   People.findByIdAndRemove(req.params.id, (error, data) => {
//     res.redirect('/people/view');
//   });
// });
// // EDIT ROUTE
// app.get('/people/:id/edit', (req, res) => {
//   People.findById(req.params.id, (err, foundPeople) => {
//     res.render(
//       'edit.ejs',
//     {
//       people: foundPeople
//     });
//   });
// });
// // PUT ROUTE
// app.put('/people/:id', (req, res) => {
//   People.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatePeople) => {
//    res.redirect('/people/');
//  });
// });
// // POST ROUTE
// app.post('/people/', (req, res) => {
//   People.create(req.body, (err, createdPerson) => {
//     res.redirect('/people');
//   });
// });
//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
