const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')
const path = require('path')

const app = express()





// ...existing code...app.use('/videos', express.static(path.join(__dirname, 'public/videos')))// Add this BEFORE any other route handlers
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});