-- Population of each district, found by adding up that of the cities with the same district
SELECT 
    District, SUM(Population) 'Population'
FROM
    mhq.city
GROUP BY District;

-- Population of each district, found by adding up that of the cities with the same CountryCode
SELECT 
    CountryCode, SUM(Population) 'Population'
FROM
    mhq.city
GROUP BY CountryCode;

SELECT 
District, MIN(Population) 'Population of the city with the smallest population in each district'
FROM
    mhq.city
GROUP BY District;

SELECT 
CountryCode, MIN(Population) 'Population of the city with the smallest population in each country'
FROM
    mhq.city
GROUP BY CountryCode;

-- Average of the city population in each district 
SELECT 
District, AVG(Population) 'Average city population'
FROM
    mhq.city
GROUP BY District;
