const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: '172.17.0.2',
    database: 'api_node',
    password: '123456',
    port: 5432,
})

module.exports = pool;