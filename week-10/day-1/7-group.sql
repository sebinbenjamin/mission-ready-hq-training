-- Population of each district, found by adding up that of the cities with the same district
SELECT 
    District, SUM(Population) 'Population'
FROM
    world.city
GROUP BY District;

-- Population of each district, found by adding up that of the cities with the same CountryCode
SELECT 
    CountryCode, SUM(Population) 'Population'
FROM
    world.city
GROUP BY CountryCode;

SELECT 
District, MIN(Population) 'Population of the city with the smallest population in each district'
FROM
    world.city
GROUP BY District;

SELECT 
CountryCode, MIN(Population) 'Population of the city with the smallest population in each country'
FROM
    world.city
GROUP BY CountryCode;

-- Average of the city population in each district 
SELECT 
District, AVG(Population) 'Average city population'
FROM
    world.city
GROUP BY District;
