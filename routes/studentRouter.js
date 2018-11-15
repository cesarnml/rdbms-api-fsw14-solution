const router = require('express').Router()
const crudRouteMaker = require('../helpers/crudRouteMaker')
const { findById, ...students } = require('../controllers').students

crudRouteMaker(router, students)

router.get('/:id', students.findByIdAndJoinCohorts)

module.exports = router
