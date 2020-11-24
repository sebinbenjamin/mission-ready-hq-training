SELECT 
    *
FROM
    mhq.country
WHERE
    IndepYear BETWEEN 1990 AND 1994;

SELECT 
    Name, IndepYear, GovernmentForm
FROM
    mhq.country
WHERE
    GovernmentForm IN ('Republic');

SELECT 
    Name, IndepYear, GovernmentForm
FROM
    mhq.country
WHERE
    (IndepYear BETWEEN 1990 AND 1994)
        AND (GovernmentForm IN ('Republic'));
        
SELECT DISTINCT
    IndepYear
FROM
    mhq.country
WHERE
    (IndepYear BETWEEN 1900 AND 2000)
        AND (GovernmentForm IN ('Republic'));        
        
SELECT DISTINCT
    IndepYear, Region
FROM
    mhq.country
WHERE
    IndepYear BETWEEN 1900 AND 2000;
        
        
SELECT DISTINCT
    IndepYear, GovernmentForm
FROM
    mhq.country
WHERE
    GovernmentForm IN ('Republic' , 'Federal Republic');
    
-- Purpose of DISTINCT is defeated here, as atleast one column [a.k.a the Primary key] always has a different value. 
SELECT DISTINCT
    *
FROM
    mhq.country
WHERE
    GovernmentForm IN ('Republic' , 'Federal Republic');
    
SELECT DISTINCT
    Name, Continent, Region, Code
FROM
    mhq.country
WHERE
    name LIKE 'Angola';

