const db = require('./../config/db')()

module.exports = {
  async getUsers (id, callback) {
    db.query(`SELECT v_search.*, realty.fk_user 'broker_id', user.name, user.surname FROM cobertura.v_search join realty on realty.pk_realty = v_search.pk_realty join broker on broker.fk_user = realty.fk_user join user on user.pk_user = broker.fk_user where realty.fk_user = ${id}`, callback)
  },
}