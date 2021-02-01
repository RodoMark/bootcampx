SELECT name, id, cohort_id
FROM students 
WHERE phonenumber IS NULL
OR email IS NULL
;