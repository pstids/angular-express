import express = require('express');
import {User} from 'model/user';

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users:User[] = [];
  users.push({id: '1', name: 'Lisa Dillard', dob: new Date('22/01/1967'), address: 
    `3863 Worthington Drive
    Avalon, TX 76651`});
  users.push({id: '1', name: 'Sharon Barnes', dob: new Date('15/06/1980'), address: 
    `999 Hillcrest Avenue
    Boston, MA 02199`});
  users.push({id: '1', name: 'Robert J. Soares', dob: new Date('10/04/1972'), address: 
    `3331 Heritage Road
    Tranquility, CA 93668`});
  users.push({id: '1', name: 'Andrew C. Lopez', dob: new Date('27/02/1978'), address: 
    `3218 Asylum Avenue
    Manchester, CT 06040`});

  res.send(JSON.stringify(users));
});

export = router;
