SELECT max(average_assistance_time) as max_average_assistance_time
FROM (
SELECT cohorts.name as name, avg(completed_at - started_at) as average_assistance_time
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY average_assistance_time) as max


