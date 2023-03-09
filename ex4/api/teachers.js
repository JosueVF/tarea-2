// const router = require('express').Router();
const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker');

const DEFAULT_LIMIT = 20;

router.get('/', (req, res) => {
  const limit = req.query.limit || DEFAULT_LIMIT;

  const teachers = [];

  for (let i = 0; i < limit; i++) {
    let isR = 'No';
    Math.random() >= .4 ? isR = 'Yes': 'No';

    let isSH = 'No';
    Math.random() >= .8 ? isSH = 'Yes': 'No';
    

    const teacher = {
      id: `T000${i + 1}`,
      name: faker.name.firstName(),
      age: Math.floor(Math.random() * (99-26)+26),
      gender: faker.name.sex(),
      email: faker.internet.email(),
      tell: faker.tell,
      address: {
        street: faker.address.street(),
        num: faker.address.buildingNumber()
      }
    };
    
    teachers.push(teacher);
  }

  res.send(teachers);
});

router.get('/ts26-28', (req, res) => {
  const limit = req.query.limit || DEFAULT_LIMIT;

  const teachers = [];
  const ts26_28 = [];

  for (let i = 0; i < limit; i++) {
    let isR = 'No';
    Math.random() >= .4 ? isR = 'Yes': 'No';

    let isSH = 'No';
    Math.random() >= .8 ? isSH = 'Yes': 'No';
    

    const teacher = {
      id: `T000${i + 1}`,
      name: faker.name.firstName(),
      age: Math.floor(Math.random() * (99-26)+26),
      gender: faker.name.sex(),
      email: faker.internet.email(),
      tell: faker.tell,
      address: {
        street: faker.address.street(),
        num: faker.address.buildingNumber()
      }
    };
    
    teachers.push(teacher);
  }

  for (let i=0; i< teachers.length; i++){
    if (teachers[i].age > 25 && teachers[i].age < 29 ){
      ts26_28.push(teachers[i]);
    }
  }

  res.send(ts26_28);
});

router.get('/:id', (req, res) => {
  const limit = DEFAULT_LIMIT;
  const id = req.query.id;

  const teachers = [];
  const tID = [];

  for (let i = 0; i < limit; i++) {
    let isR = 'No';
    Math.random() >= .4 ? isR = 'Yes': 'No';

    let isSH = 'No';
    Math.random() >= .8 ? isSH = 'Yes': 'No';
    

    const teacher = {
      id: `T000${i + 1}`,
      name: faker.name.firstName(),
      age: Math.floor(Math.random() * (99-26)+26),
      gender: faker.name.sex(),
      email: faker.internet.email(),
      tell: faker.tell,
      address: {
        street: faker.address.street(),
        num: faker.address.buildingNumber()
      }
    };
    
    teachers.push(teacher);
  }

  for (let i=0; i< teachers.length; i++){
    if (teachers[i].id === id){
      tID.push(teachers[i]);
    }
  }

  res.send(tID);
});

module.exports = router;