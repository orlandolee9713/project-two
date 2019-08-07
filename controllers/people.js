// ========================
//        Configurations
// ========================

const express = require('express');
const router = express.Router();
const People = require('../models/people.js');

// ========================
//        Routes
// ========================
router.get('/new', (req, res) => {
  res.render('new.ejs');
});
// HOME ROUTE
router.get('/' , (req, res) => {
  People.find({}, (err, findPeople) => {
    res.render('home.ejs',
    {
      people: findPeople
    }
  )
  })
});
// INDEX ROUTE
router.get('/index', (req, res) => {
  People.find({}, (err, foundPeople) => {
    res.render(
      'index.ejs',
    {
      people: foundPeople
    }
  );
});
});
// SHOW ROUTE
router.get('/:id/show', (req, res) => {
    People.findById(req.params.id, (error, foundPerson) => {
        res.render('show.ejs', {
            people: foundPerson
        });
    });
});
// DELETE ROUTE
router.delete('/:id', (req, res) => {
  console.log(req.params.id);
  People.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect('/people/index');
  });
});
// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
  People.findById(req.params.id, (err, foundPeople) => {
    res.render(
      'edit.ejs',
    {
      people: foundPeople
    });
  });
});
// PUT ROUTE
router.put('/index/:id', (req, res) => {
  console.log(req.body);
  People.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatePeople) => {
   res.redirect('/people/index');
 });
});
// POST ROUTE
router.post('/', (req, res) => {
  People.create(req.body, (err, createdPerson) => {
    res.redirect('/people/index');
  });
});

// ========================
//        Database
// ========================
const people = [
{ firstName: 'Steven',
  lastName: 'Jones',
  phone: 9145566173,
  email: 'SJones@crudtech.org',
  jobTitle: 'Sr. Dev.'
},
{ firstName: 'Michael',
  lastName: 'Hope',
  phone: 6462445211,
  email: 'MHope@crudtech.org',
  jobTitle: 'Sr. Dev.'
},
{ firstName: 'Maria',
  lastName: 'Regante',
  phone: 9143358125,
  email: 'MRegante@crudtech.org',
  jobTitle: 'Jr. Dev.'
},
{ firstName: 'Pamela',
  lastName: 'Thompson',
  phone: 2125834567,
  email: 'PThompson@crudtech.org',
  jobTitle: 'Jr. Dev.'
},
{ firstName: 'Elizabeth',
  lastName: 'Williams',
  phone: 5189952431,
  email: 'EWilliams@crudtech.org',
  jobTitle: 'Jr. Dev.'
},
{ firstName: 'Rachel',
  lastName: 'DeCosta',
  phone: 6466344452,
  email: 'RDeCosta@crudtech.org',
  jobTitle: 'Jr. Dev.'
},
{ firstName: 'Anna',
  lastName: 'Sims',
  phone: 5164523321,
  email: 'ASims@crudtech.org',
  jobTitle: 'Jr. Dev.'
},
{ firstName: 'Paula',
  lastName: 'Jackson',
  phone: 2122226754,
  email: 'PJackson@crudtech.org',
  jobTitle: 'Jr. Dev.'
},
{ firstName: 'Vilma',
  lastName: 'Robles',
  phone: 2129908765,
  email: 'VRobles@crudtech.org',
  jobTitle: 'Reception'
},
{ firstName: 'Stephen',
  lastName: 'Bulfamante',
  phone: 5162234523,
  email: 'SBulfamante@crudtech.org',
  jobTitle: 'Reception.'
},
{ firstName: 'Maria',
  lastName: 'Cruz',
  phone: 6462234121,
  email: 'MCruz@crudtech.org',
  jobTitle: 'House Keeping'
},
{ firstName: 'Lamont',
  lastName: 'Blackburn',
  phone: 9145632212,
  email: 'LBlackburn@crudtech.org',
  jobTitle: 'House Keeping'
},
{ firstName: 'Bryan',
  lastName: 'Espinosa',
  phone: 2123452132,
  email: 'BEspinosa@crudtech.org',
  jobTitle: 'House Keeping'
},
{ firstName: 'Kelli',
  lastName: 'Farrish',
  phone: 8454533562,
  email: 'KFarrish@crudtech.org',
  jobTitle: 'CEO'
},
{ firstName: 'Anne',
  lastName: 'May',
  phone: 6466843452,
  email: 'AMay@crudtech.org',
  jobTitle: 'CIO'
},
{ firstName: 'Orlando',
  lastName: 'Lee',
  phone: 9145634610,
  email: 'OLee@crudtech.org',
  jobTitle: 'President'
}
];
module.exports = router;
