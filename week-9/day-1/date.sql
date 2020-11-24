SELECT
    MAX(LifeExpectancy)
FROM
    `world`.`country`;

SELECT 
    COUNT(DISTINCT Continent) 'No of Continents'
FROM
    `world`.`country`;
    
SELECT
AVG(LifeExpectancy) 'Average World Life expectancy'
FROM
    `world`.`country`;
  
SELECT DATE('2020-11-23T03:18:14.688Z');
SELECT curdate();
select current_timestamp();

select dayname('2020-03-23T03:18:14.688Z');

select dayofmonth('2020-03-23T03:18:14.688Z');

SELECT DATE_FORMAT('2009-10-04 22:23:00', '%W %M %Y') 'Date is';