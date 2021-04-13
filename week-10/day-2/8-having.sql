SELECT 
    District, SUM(Population) 'Total population'
FROM
    world.city
GROUP BY District;

SELECT 
    District, SUM(Population) 'Total population'
FROM
    world.city
GROUP BY District
HAVING SUM(Population) > 16990000;

-- Population of the city with the smallest population in each district
-- having a an average population greater than 90000
SELECT 
District, MIN(Population) 'Population of the city'
FROM
    world.city
GROUP BY District
HAVING AVG(Population) > 90000;

SELECT 
    Continent,
    ROUND(SUM(SurfaceArea), 2) AS 'Continent area',
    ROUND(AVG(LifeExpectancy), 0) 'Average life expectancy in the continent'
FROM
    world.country
GROUP BY Continent
HAVING AVG(LifeExpectancy) < 70