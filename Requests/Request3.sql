--Insert data into company table

INSERT INTO company (company_name, contact_email, phone_number, address, industry_type, license_number)
VALUES
  ('东方科技有限公司', 'info@dongfangtech.com', '+86 10 1234 5678', '10 Keji Road, Chaoyang District, Beijing', 'Technology', 'CN12345678');


--Insert data into quotation table

INSERT INTO quotation (company_id, insurance_broker_id, date_issued, proposed_premium, sum_insured, coverage_details, quotation_status, acceptance_date)
VALUES
  (3, '2025-01-03', 300.00, 10000.00, 'Personal Accident Coverage (Accident, Disability, Death)', 'Pending', NULL);


--Insert data into employee table

INSERT INTO employee (company_id,staff_id, full_name, date_of_birth, gender, phone_number, email, nationality)
VALUES
  (6, 'EMS051','王伟(Wang Wei)', '1985-03-15', 'Male', '+86 139 1234 5678', 'wang.wei@dongfangtech.com', 'Chinese'),
  (6, 'EMS52','李娜(Li Na)', '1990-07-10', 'Female', '+86 139 2345 6789', 'li.na@dongfangtech.com', 'Chinese'),
  (6, 'EMS53','张强(Zhang Qiang)', '1992-09-30', 'Male', '+86 139 3456 7890', 'zhang.qiang@dongfangtech.com', 'Chinese'),
  (6, 'EMS54','刘洋(Liv Yang)', '1988-11-25', 'Female', '+86 139 4567 8901', 'liu.yang@dongfangtech.com', 'Chinese'),
  (6, 'EMS55','陈刚(Chen Gang)', '1987-05-12', 'Male', '+86 139 5678 9012', 'chen.gang@dongfangtech.com', 'Chineses');



