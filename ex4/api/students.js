// const router = require('express').Router();
const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker');

const DEFAULT_LIMIT = 20;

router.get('/', (req, res) => {
  const limit = req.query.limit || DEFAULT_LIMIT;

  const students = [];

  for (let i = 0; i < limit; i++) {
    let isR = 'No';
    Math.random() >= .4 ? isR = 'Yes': 'No';

    let isSH = 'No';
    Math.random() >= .8 ? isSH = 'Yes': 'No';
    

    const student = {
      id: `S000${i + 1}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: Math.floor(Math.random() * (29-18)+18),
      grade: Math.floor(Math.random() * (10-1)+1),
      email: faker.internet.email(),
      is_regular: isR,
      is_sHolder: isSH
    };
    
    students.push(student);
  }

  for (let i=0; i< students.length; i++){
    if (students[i].is_sHolder == "Yes"){
      studentsSH.push(students[i]);
    }
  }

  res.send(students);
});

router.get('/studentsSH', (req, res) => {
  const limit = req.query.limit || DEFAULT_LIMIT;

  const students = [];
  const studentsSH = [];

  for (let i = 0; i < limit; i++) {
    let isR = 'No';
    Math.random() >= .4 ? isR = 'Yes': 'No';

    let isSH = 'No';
    Math.random() >= .8 ? isSH = 'Yes': 'No';
    

    const student = {
      id: `S000${i + 1}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: Math.floor(Math.random() * (29-18)+18),
      grade: Math.floor(Math.random() * (10-1)+1),
      email: faker.internet.email(),
      is_regular: isR,
      is_sHolder: isSH
    };
    
    students.push(student);
  }

  for (let i=0; i< students.length; i++){
    if (students[i].is_sHolder == "Yes"){
      studentsSH.push(students[i]);
    }
  }

  res.send(studentsSH);
});

router.get('/stMa20', (req, res) => {
  const limit = req.query.limit || DEFAULT_LIMIT;

  const students = [];
  const st21 = [];

  for (let i = 0; i < limit; i++) {
    let isR = 'No';
    Math.random() >= .4 ? isR = 'Yes': 'No';

    let isSH = 'No';
    Math.random() >= .8 ? isSH = 'Yes': 'No';
    

    const student = {
      id: `S000${i + 1}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: Math.floor(Math.random() * (29-18)+18),
      grade: Math.floor(Math.random() * (10-1)+1),
      email: faker.internet.email(),
      is_regular: isR,
      is_sHolder: isSH
    };
    
    students.push(student);
  }

  for (let i=0; i< students.length; i++){
    if (students[i].age > 20){
      st21.push(students[i]);
    }
  }

  res.send(st21);
});

router.get('/st26-28', (req, res) => {
  const limit = req.query.limit || DEFAULT_LIMIT;

  const students = [];
  const st26_28 = [];

  for (let i = 0; i < limit; i++) {
    let isR = 'No';
    Math.random() >= .4 ? isR = 'Yes': 'No';

    let isSH = 'No';
    Math.random() >= .8 ? isSH = 'Yes': 'No';
    

    const student = {
      id: `S000${i + 1}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: Math.floor(Math.random() * (29-18)+18),
      grade: Math.floor(Math.random() * (10-1)+1),
      email: faker.internet.email(),
      is_regular: isR,
      is_sHolder: isSH
    };
    
    students.push(student);
  }

  for (let i=0; i< students.length; i++){
    if (students[i].age > 25 && students[i].age < 29 ){
      st26_28.push(students[i]);
    }
  }
  
  res.send(st26_28);
});

router.get('/Iapellido', (req, res) =>{
  const limit = DEFAULT_LIMIT;
  const IlastN = req.query.IlastN;

  const students = [];
  const sILN = [];

  for (let i = 0; i < limit; i++) {
    let isR = 'No';
    Math.random() >= .4 ? isR = 'Yes': 'No';

    let isSH = 'No';
    Math.random() >= .8 ? isSH = 'Yes': 'No';
    

    const student = {
      id: `S000${i + 1}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: Math.floor(Math.random() * (29-18)+18),
      grade: Math.floor(Math.random() * (10-1)+1),
      email: faker.internet.email(),
      is_regular: isR,
      is_sHolder: isSH
    };
    
    students.push(student);
  }

  for (let i=0; i< students.length; i++){
    if (students[i].lastName[0] === IlastN){
      sILN.push(students[i]);
    }
  }

  res.send(sILN);
});


module.exports = router;