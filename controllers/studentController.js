const db = require('../data/db')
const crudMethodMaker = require('../helpers/crudMethodMaker')
module.exports = {
  ...crudMethodMaker(db, 'students'),

  findByIdAndJoinCohorts (req, res, next) {
    const { id } = req.params
    db('students as s')
      .join('cohorts as c', 's.cohort_id', 'c.id')
      .select('s.id', 's.name', 'c.name as cohort')
      .where('s.id', id)
      .then(students => res.status(200).json(students))
      .catch(next)
  }
}
