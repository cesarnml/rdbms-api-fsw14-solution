const router = require('express').Router()

const {
  find,
  remove,
  create,
  update,
  findByIdAndJoinCohorts
} = require('../controllers').students

router.get('/', find)

router.get('/:id', findByIdAndJoinCohorts)

router.post('/', create)

router.delete('/:id', remove)

router.put('/:id', update)

module.exports = router
