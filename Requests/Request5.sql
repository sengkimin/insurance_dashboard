-- total propose premium

  SELECT SUM(proposed_premium) AS total_proposed_premium
  FROM quotation;

-- Total policy

  SELECT COUNT(*) AS total_policies
  FROM insurance_policy;

-- Total insured and total sum-insured


SELECT COUNT( ic.insurance_policy_id) AS total_insured,
SUM( ip.coverage_amount) AS total_sum_insured
FROM insured_coverage ic
JOIN insurance_policy_benefit ip ON ic.insurance_policy_id = ip.id;

-- Total prospect and number of prospect campany

  SELECT  COUNT(e.id) - COUNT(ic.id) AS total_prospect
  FROM employee e
  LEFT JOIN insured_coverage ic ON e.id = ic.employee_id


  SELECT count(id) AS prospect_company from quotation 
    where quotation_status = 'Pending' 


-- Total HF partner and number of not partner

SELECT COUNT(*) - COUNT(CASE WHEN is_partner_hf = FALSE THEN 1 END)AS total_hf_partners,
COUNT(*) - COUNT(CASE WHEN is_partner_hf = TRUE THEN 1 END) AS total_non_partners
FROM health_facility;