const api = require('./../../lib/api')

module.exports = {
  async getById(req, res) {
    const url = req.params.url

    const user = await api.get(`users/broker/${url}`)
      .then(result => result.data.data[0] )
      .catch(err => err)

    if(user.response.data.error)
      return res.render('error', {
        layout: 'default',
        title: 'Cobertura: Ops!'
      })

    const houses = await api.get(`houses/${user.pk_user}`)
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