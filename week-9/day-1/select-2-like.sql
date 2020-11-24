-- % is 0 or more characters following. Equivalent to *
-- _ is exactly 1 chracter. Equivalent to ?

-- Ends with 
SELECT 
    *
FROM
    world.country
WHERE
    Name LIKE 'No%';

-- Begins with ... and ends with ... 
SELECT 
    *
FROM
    world.country
WHERE
    Name LIKE 'N%d';

-- Begins with ...
SELECT 
    *
FROM
    world.country
WHERE
    Name LIKE '%d';
    
-- Contans a word kind of thing...
SELECT 
    *
FROM
    world.country
WHERE
    Name LIKE '%island%';
    
SELECT 
    *
FROM
    world.city
WHERE
    CountryCode LIKE '_O_';
    
SELECT 
	DISTINCT CountryCode
FROM
    world.city
WHERE
    CountryCode LIKE '_O_';
    
SELECT 
	*
FROM
    world.country
WHERE
    Name LIKE 'A_g%';
    
SELECT 
	*
FROM
    world.country
WHERE
    Name LIKE 'Angola';

SELECT 
	*
FROM
    world.country
WHERE
    Region like '%Africa%';
    
SELECT 
	*
FROM
    world.country
WHERE
    Name LIKE '%a_n%' AND Region LIKE '%Africa%';

SELECT 
	*
FROM
    world.country
WHERE
    Region NOT LIKE '%America%';
