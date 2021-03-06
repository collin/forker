const express = require('express')
let app

module.exports = {
  start: (shared) => {
    return new Promise((resolve, reject) => {
      try {
        app = express()
        app.get('/', (req, res, next) => {
          res.json(shared)
        })

        app.get('/spiderbank', (req, res, next) => {
          res.json(['woah', shared])
        })

        server = app.listen(3000, () => {
          console.log('listening on localhost:3000...')
          resolve()
        })
      }
      catch (error) {
        reject(error)
      }
    })

  },

  teardown: () => {
    return new Promise((resolve, reject) => {
      try {
        if (server) {
          server.close(() => {
            resolve()
          })
        }
        else {
          resolve()
        }
      }
      catch (error) {
        reject(error)
      }
    })
  }
}
