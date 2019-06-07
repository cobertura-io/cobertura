var sql = require('mysql');

var connection = function() {
  return sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'cobertura'
  });
};

module.exports = function() {
  return connection();
};