-- total propose premium

  SELECT COUNT(*) AS total_policies,
  SUM(proposed_premium) AS total_proposed_premium
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

SELECT COUNT(DISTINCT e.id)-
COUNT(DISTINCT i.employee_id) as total_prospect
  FROM employee e
  LEFT JOIN insured_coverage i ON i.employee_id=e.id
-- Total HF partner and number of not partner

SELECT COUNT(*) - COUNT(CASE WHEN is_partner_hf = FALSE THEN 1 END)AS total_hf_partners,
COUNT(*) - COUNT(CASE WHEN is_partner_hf = TRUE THEN 1 END) AS total_non_partners
FROM health_facility;