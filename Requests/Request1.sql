--Insert new data into table

INSERT INTO public.employee(
	id, company_id, staff_id, full_name, date_of_birth, gender, phone_number, email, nationality)
	VALUES 
	(84, 4, 'EMS050', 'SENG IN', '1992-12-03', 'Female', '+855 93 123 052', 'seng.in@cambodiaindustry.com', 'Cambodia')
;

--Add new COLUMN

ALTER TABLE public.employee
ADD nationality varchar(255);

--forgot to put the not null near the (255) (like ADD nationality varchar(255) NOT NULL;)
That why use this update 

--Update the Null to the Unknown
--Just change the null to Unknown that easier to know

UPDATE public.employee
SET nationality = 'Unknown' 
WHERE nationality IS NULL;

--Change null to not null in colmn nationality

ALTER TABLE public.employee
ALTER COLUMN nationality SET NOT NULL;