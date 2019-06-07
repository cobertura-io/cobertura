const userDAO = require('./../../models/userDAO')

module.exports = {
  async index(req, res) {
    return res.render('profile');
  },
  async indexID(req, res) {
    const response = await userDAO.getUsers(req.params.id, function(err, result) {
      if(result != 0 ) {
        return res.render('profile', { id: req.params.id, houses: result })
      } else {
        return res.redirect('/')
      }
    })
  }
}