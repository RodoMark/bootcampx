const args = process.argv

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
  SELECT count(assistance_requests.*) as total_assistances, teachers.name
  FROM assistance_requests
  JOIN teachers ON teachers.id = teacher_id
  WHERE name = ${args[2]}
  GROUP BY teachers.name;
`)
.then(output => {
  console.log(output)
})
.catch(e => console.log('Query error', e.stack))