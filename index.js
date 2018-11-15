const server = require('./server')

const PORT = process.env.PORT || 4000

//* Sanity Check
server.get('/', (req, res) => {
  res.status(200).json('Server Online!')
})

//* Server Awakens
server.listen(PORT, () =>
  console.log(`\n=== 🦄  Server Listens and Obeys on ${PORT} 🚀  ===\n`)
)
