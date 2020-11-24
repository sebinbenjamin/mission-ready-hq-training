SELECT 
    *
FROM
    world.COUNTRY
WHERE
    IndepYear BETWEEN 1990 AND 1994;

SELECT 
    Name, IndepYear, GovernmentForm
FROM
    world.COUNTRY
WHERE
    GovernmentForm IN ('Republic');

SELECT 
    Name, IndepYear, GovernmentForm
FROM
    world.COUNTRY
WHERE
    (IndepYear BETWEEN 1990 AND 1994)
        AND (GovernmentForm IN ('Republic'));
        
SELECT DISTINCT
    IndepYear
FROM
    world.COUNTRY
WHERE
    (IndepYear BETWEEN 1900 AND 2000)
        AND (GovernmentForm IN ('Republic'));        
        
SELECT DISTINCT
    IndepYear, Region
FROM
    world.COUNTRY
WHERE
    IndepYear BETWEEN 1900 AND 2000;
        
        
SELECT DISTINCT
    IndepYear, GovernmentForm
FROM
    world.COUNTRY
WHERE
    GovernmentForm IN ('Republic' , 'Federal Republic');
    
-- Purpose of DISTINCT is defeated here, as atleast one column needs to be different. 
SELECT DISTINCT
    *
FROM
    world.COUNTRY
WHERE
    GovernmentForm IN ('Republic' , 'Federal Republic');
    
SELECT DISTINCT
    Name, Continent, Region, Code
FROM
    world.country
WHERE
    name LIKE 'Angola';

