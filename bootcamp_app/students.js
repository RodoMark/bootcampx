const args = process.argv

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`SELECT ${args.id}, name, cohort_id FROM students LIMIT 5;`)
.then(output => {
  console.log(output)
})
.catch(e => console.log('Query error', e.stack))