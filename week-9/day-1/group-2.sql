SELECT 
District, SUM(Population)
FROM
    mhq1.city
GROUP BY District;

SELECT 
CountryCode, SUM(Population)
FROM
    mhq1.city
GROUP BY CountryCode;

SELECT 
District, MIN(Population) 'Population of smallest city in the district'
FROM
    mhq1.city
GROUP BY District;

SELECT 
CountryCode, MIN(Population) 'Population of the city with the smallest population'
FROM
    mhq1.city
GROUP BY CountryCode;

SELECT 
District, AVG(Population) 'Average city population'
FROM
    mhq1.city
GROUP BY District;

SELECT 
    *
FROM
    mhq1.city;
    
