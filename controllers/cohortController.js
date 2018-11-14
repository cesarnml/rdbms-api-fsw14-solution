const db = require('../data/db')
const crudMaker = require('../helper/crudMaker')
module.exports = {
  ...crudMaker(db, 'cohorts'),

  findStudentsByCohortId (req, res, next) {
    const { id } = req.params
    db('cohorts as c')
      .join('students as s', 'c.id', 's.cohort_id')
      .where('c.id', id)
      .then(students => res.status(200).json(students))
      .catch(next)
  }
}
