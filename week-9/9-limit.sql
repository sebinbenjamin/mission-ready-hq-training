SELECT 
    *
FROM
    mhq.city;

-- Show the first 7 results. Unpredictable results as no ORDER BY clause is used
SELECT 
    *
FROM
    mhq.city
LIMIT 7;

-- Show the first 7 results. Unpredictable results as no ORDER BY clause is used
SELECT 
    *
FROM
    mhq.city
WHERE Name LIKE 'Kab%'
LIMIT 7;

-- Show the first 5 results. Predictable results as we ORDER BY the Name
SELECT 
    *
FROM
    mhq.country
WHERE Region LIKE 'A%'
ORDER BY Name
LIMIT 5;

-- Show the first 3 results
SELECT 
    *
FROM
    mhq.country
WHERE Region LIKE 'A%'
ORDER BY Name
LIMIT 3;

-- Show the first 3 results
SELECT 
    *
FROM
    mhq.country
WHERE
    Region LIKE 'A%'
ORDER BY Name
LIMIT 0 , 3;

-- Show the NEXT 3 results
-- Offset => Page no X the no of results in a pages 
SELECT 
    *
FROM
    mhq.country
WHERE
    Region LIKE 'A%'
ORDER BY Name
LIMIT 3 , 3;

-- Show the NEXT 3 results
SELECT 
    *
FROM
    mhq.country
WHERE
    Region LIKE 'A%'
ORDER BY Name
LIMIT 6 , 3;

