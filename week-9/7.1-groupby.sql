SELECT 
    Region, SUM(Population), AVG(LifeExpectancy)
FROM
    mhq.country
GROUP BY Region
ORDER BY SUM(Population);

SELECT 
    Region, SUM(Population), AVG(LifeExpectancy)
FROM
    mhq.country
WHERE LifeExpectancy != 0
GROUP BY Region
ORDER BY AVG(LifeExpectancy);

SELECT *
FROM `mhq`.`country`;

