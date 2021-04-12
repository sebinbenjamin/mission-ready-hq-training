SELECT
    MAX(LifeExpectancy)
FROM
   mhq.country;

SELECT 
    COUNT(Continent) 'No of Continents'
FROM
   mhq.country;

SELECT 
    COUNT(DISTINCT Continent) 'No of Continents'
FROM
   mhq.country;
    
SELECT 
    AVG(LifeExpectancy) 'Average World Life expectancy'
FROM
    mhq.country;
  
-- Current data and time could be useful for comparision, eg: returnning purchases from last friday to today
SELECT curdate();
select current_timestamp();

SELECT DATE('2020-11-23T03:18:14.688Z');
select dayname('2020-03-23T03:18:14.688Z');

select dayofmonth('2020-03-23T03:18:14.688Z');

SELECT DATE_FORMAT('2009-10-04 22:23:00', '%W %M %Y') 'Date is';