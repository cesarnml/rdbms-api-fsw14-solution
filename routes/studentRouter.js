const router = require('express').Router()
const crudRouteMaker = require('../helpers/crudRouteMaker')
const { findById, ...students } = require('../controllers').students

//* All of CRUD minus findById
crudRouteMaker(router, students)

router.get('/:id', students.findByIdAndJoinCohorts)

module.exports = router
