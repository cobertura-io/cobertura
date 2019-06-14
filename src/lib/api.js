const axios = require('axios')

const api = axios.create({
    baseURL: 'http://cobertura.io/'
})

module.exports = api