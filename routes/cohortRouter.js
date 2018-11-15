const router = require('express').Router()
const { cohorts } = require('../controllers')
const crudRouteMaker = require('../helpers/crudRouteMaker')

crudRouteMaker(router, cohorts)

router.get('/:id/students', cohorts.findStudentsByCohortId)

module.exports = router
