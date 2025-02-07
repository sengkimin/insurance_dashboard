ALTER TABLE insured_coverage
DROP COLUMN date_of_birth;

--Delte date of birth in insured coverage by DROP































































ALTER TABLE insured_coverage
ADD COLUMN employee_id INT;

ALTER TABLE insured_coverage
ADD CONSTRAINT fk_employee_id FOREIGN KEY (employee_id) REFERENCES employee(employee_id);

SELECT ic.coverage_details, ic.sum_insured, e.date_of_birth
FROM insured_coverage ic
JOIN employee e ON ic.employee_id = e.employee_id;
