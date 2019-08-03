// ========================
//        Configurations
// ========================

const express = require('express');
const router = express.Router();
const People = require('../models.people.js');

// ========================
//        Routes
// ========================








// ========================
//        Database
// ========================
const people = [
{ fistName: 'Steven',
  lastName: 'Jones',
  phone: 9145566173,
  jobTitle: 'Sr. Dev.'
},
{ fistName: 'Michael',
  lastName: 'Hope',
  phone: 6462445211,
  jobTitle: 'Sr. Dev.'
},
{ fistName: 'Maria',
  lastName: 'Regante',
  phone: 9143358125,
  jobTitle: 'Jr. Dev.'
},
{ fistName: 'Pamela',
  lastName: 'Thompson',
  phone: 2125834567,
  jobTitle: 'Jr. Dev.'
},
{ fistName: 'Elizabeth',
  lastName: 'Williams',
  phone: 5189952431,
  jobTitle: 'Jr. Dev.'
},
{ fistName: 'Rachel',
  lastName: 'DeCosta',
  phone: 6466344452,
  jobTitle: 'Jr. Dev.'
},
{ fistName: 'Anna',
  lastName: 'Sims',
  phone: 5164523321,
  jobTitle: 'Jr. Dev.'
},
{ fistName: 'Paula',
  lastName: 'Jackson',
  phone: 2122226754,
  jobTitle: 'Jr. Dev.'
},
{ fistName: 'Vilma',
  lastName: 'Robles',
  phone: 2129908765,
  jobTitle: 'Reception'
},
{ fistName: 'Stephen',
  lastName: 'Bulfamante',
  phone: 5162234523,
  jobTitle: 'Reception.'
},
{ fistName: 'Maria',
  lastName: 'Cruz',
  phone: 6462234121,
  jobTitle: 'House Keeping'
},
{ fistName: 'Lamont',
  lastName: 'Blackburn',
  phone: 9145632212,
  jobTitle: 'House Keeping'
},
{ fistName: 'Bryan',
  lastName: 'Espinosa',
  phone: 2123452132,
  jobTitle: 'House Keeping'
},
{ fistName: 'Kelli',
  lastName: 'Farrish',
  phone: 8454533562,
  jobTitle: 'CEO'
},
{ fistName: 'Anne',
  lastName: 'May',
  phone: 6466843452,
  jobTitle: 'CIO'
},
{ fistName: 'Orlando',
  lastName: 'Lee',
  phone: 9145634610,
  jobTitle: 'President'
}
];
module.exports = router;
