SELECT UPPER('Lowercase fun') AS 'In Upper';
SELECT LOWER('SQL Tutorial is FUN!') 'In Lower';

SELECT UPPER('Lowercase fun') AS 'In Upper', LOWER('SQL Tutorial is FUN!') 'In Lower'; 

SELECT TRIM('         
                           sdf d df ds fdf dsf sd sdf dsf dsf df             ') 'Trimmed stuff';

SELECT CountryCode, TRIM(Language) 'language', IsOfficial, Percentage
FROM `world`.`countrylanguage`;

SELECT 
    CountryCode,
    UPPER(Language) Language,
    LENGTH(Language) 'Language Length',
    IsOfficial,
    Percentage
FROM
    `world`.`countrylanguage`
WHERE
    LENGTH(Language) > 15
;
    
SELECT 
      LOWER(CountryCode) AS 'code', Language, IsOfficial, Percentage
FROM
    `world`.`countrylanguage`; 
    
SELECT 
    Code, Name, CONCAT(Continent, Region) 'Location thing', LocalName, GovernmentForm
FROM
    `world`.`country`;

-- CONCAT_WS - Concatenate using the seperator specified as the first parameter
SELECT 
    Code, Name, CONCAT_WS('', Continent, Region) 'Location thing', LocalName, GovernmentForm
FROM
    `world`.`country`;
    
SELECT 
    Code, Name, CONCAT_WS(', ', Continent, Region) 'Location thing', LocalName, GovernmentForm
FROM
    `world`.`country`;
    
SELECT 
    Code, Name, CONCAT_WS(' - ', Continent, Region) 'Location thing', LocalName, GovernmentForm
FROM
    `world`.`country`;
