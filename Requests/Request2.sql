SELECT e.full_name, e.gender, e.date_of_birth, c.company_name, c.company_contact_email, c.company_contact_phone_number,
    CASE
        WHEN AGE(e.date_of_birth) < INTERVAL '18 years' THEN 'Under Age'
        WHEN AGE(e.date_of_birth) > INTERVAL '60 years' THEN 'Over Age'
        ELSE 'Within Age Range'
    END AS age_group
FROM employees e
JOIN company c ON e.company_id = c.company_id;




--INTERVAL use to store and work with duration or time
-- C in mean Company table it just a short name that make easier
-- E in mean Employee table
-- JOIN we just in when we want other table to join with like the table e have data from c that why we use join to get data from te c table
--END AS it mean it will auto create new column as age_group and put the new data from CASE that have condition into age_group
