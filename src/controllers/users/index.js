const api = require('./../../lib/api')

module.exports = {
  async getById(req, res) {
    const id = req.params.id

    const response = await api.get(`users/${id}`)
      .then(result => result.data )
      .catch(err => console.log(err))

    return res.render('profile', { layout: 'default', user: response.data });
  }
}