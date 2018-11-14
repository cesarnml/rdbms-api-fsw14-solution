const server = require('./server')

const PORT = process.env.PORT || 4000

server.listen(PORT, () =>
  console.log(`\n=== 🦄  Server Listens and Obeys on ${PORT} 🚀  ===\n`)
)

server.get('/', (req, res) => {
  res.status(200).json('Server Online!')
})
