const axios = require('axios')

const api = axios.create({
    baseURL: 'http://cobertura.io/users'
})

module.exports = api