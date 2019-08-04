// console.log(process.env.MONGODB_URI);
//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
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


//___________________
// Routes
//___________________
//localhost:3000
// INDEX ROUTE
app.get('/' , (req, res) => {
  People.find({}, (err, findPeople) => {
    res.render('index.ejs',
    {
      people: findPeople
    }
  )
  })
});

// NEW ROUTE
app.get('/people/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/people/new', (req, res) => {
  People.find([
  { firstName: 'Steven',
    lastName: 'Jones',
    phone: 9145566173,
    jobTitle: 'Sr. Dev.'
  },
  { firstName: 'Michael',
    lastName: 'Hope',
    phone: 6462445211,
    jobTitle: 'Sr. Dev.'
  },
  { firstName: 'Maria',
    lastName: 'Regante',
    phone: 9143358125,
    jobTitle: 'Jr. Dev.'
  },
  { firstName: 'Pamela',
    lastName: 'Thompson',
    phone: 2125834567,
    jobTitle: 'Jr. Dev.'
  },
  { firstName: 'Elizabeth',
    lastName: 'Williams',
    phone: 5189952431,
    jobTitle: 'Jr. Dev.'
  },
  { firstName: 'Rachel',
    lastName: 'DeCosta',
    phone: 6466344452,
    jobTitle: 'Jr. Dev.'
  },
  { firstName: 'Anna',
    lastName: 'Sims',
    phone: 5164523321,
    jobTitle: 'Jr. Dev.'
  },
  { firstName: 'Paula',
    lastName: 'Jackson',
    phone: 2122226754,
    jobTitle: 'Jr. Dev.'
  },
  { firstName: 'Vilma',
    lastName: 'Robles',
    phone: 2129908765,
    jobTitle: 'Reception'
  },
  { firstName: 'Stephen',
    lastName: 'Bulfamante',
    phone: 5162234523,
    jobTitle: 'Reception.'
  },
  { firstName: 'Maria',
    lastName: 'Cruz',
    phone: 6462234121,
    jobTitle: 'House Keeping'
  },
  { firstName: 'Lamont',
    lastName: 'Blackburn',
    phone: 9145632212,
    jobTitle: 'House Keeping'
  },
  { firstName: 'Bryan',
    lastName: 'Espinosa',
    phone: 2123452132,
    jobTitle: 'House Keeping'
  },
  { firstName: 'Kelli',
    lastName: 'Farrish',
    phone: 8454533562,
    jobTitle: 'CEO'
  },
  { firstName: 'Anne',
    lastName: 'May',
    phone: 6466843452,
    jobTitle: 'CIO'
  },
  { firstName: 'Orlando',
    lastName: 'Lee',
    phone: 9145634610,
    jobTitle: 'President'
  }
], (err, findPeople) => {
   res.redirect('/people');
}
)
})

// EDIT ROUTE
//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
