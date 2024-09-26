const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.post('/submit', (req, res) => {
  res.send('Form Submitted')
})
// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
