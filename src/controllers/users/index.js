const api = require('./../../lib/api')

module.exports = {
  async getById(req, res) {
    const id = req.params.id

    const user = await api.get(`users/broker/${id}`)
      .then(result => result.data.data[0] )
      .catch(err => console.log(err))
    
    const houses = await api.get(`houses/${id}`)
      .then(result => result.data.data )
      .catch(err => console.log(err))

    return res.render('profile', { 
      layout: 'default', 
      user, 
      houses,
      title: `Cobertura: ${user.name}` 
    });
  }
}