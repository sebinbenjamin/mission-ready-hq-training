SELECT 
    District, SUM(Population) 'Total population'
FROM
    mhq.city
GROUP BY District;

SELECT 
    District, SUM(Population) 'Total population'
FROM
    mhq.city
GROUP BY District
HAVING SUM(Population) > 16990000;

-- Population of the city with the smallest population in each district
-- having a an average population greater than 90000
SELECT 
District, MIN(Population) 'Population of the city'
FROM
    mhq.city
GROUP BY District
HAVING AVG(Population) > 90000;