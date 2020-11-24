select * from mhq.city;
select * from mhq.city where district like 'Zuid-Holland';

SELECT 
CountryCode, District , SUM(Population) 'Total population'
FROM
    mhq.city
GROUP BY District
HAVING SUM(Population) > 16990000;