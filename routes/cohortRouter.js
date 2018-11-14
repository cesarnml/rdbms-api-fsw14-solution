const router = require('express').Router()
const {
  find,
  findById,
  remove,
  create,
  update,
  findStudentsByCohortId
} = require('../controllers').cohorts

router.get('/', find)

router.get('/:id', findById)

router.post('/', create)

router.delete('/:id', remove)

router.put('/:id', update)

router.get('/:id/students', findStudentsByCohortId)

module.exports = router
