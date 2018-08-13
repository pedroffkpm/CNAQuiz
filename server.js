const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/result/:id', (req, res) => {
      if(typeof process.env.id == 'undefined') {
        app.render(req, res, '/', {})
      }
      else {
      const actualPage = '/result'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
      }
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
