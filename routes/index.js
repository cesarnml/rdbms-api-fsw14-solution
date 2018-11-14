const cohortRouter = require('./cohortRouter')
const studentRouter = require('./studentRouter')

module.exports = server => {
  server.use('/api/cohorts', cohortRouter)
  server.use('/api/students', studentRouter)
}
