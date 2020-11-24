SELECT UPPER('Lowercase fun') AS 'In Upper';
SELECT LOWER('SQL Tutorial is FUN!') 'In Lower';
SELECT UPPER('Lowercase fun') AS 'In Upper', LOWER('SQL Tutorial is FUN!') 'In Lower'; 

-- TRIM removes leading and traliing whitspaces and newline characters
SELECT TRIM('         
                           sdf d df ds fdf dsf sd sdf dsf dsf df             ') 'Trimmed stuff';

SELECT 
    CountryCode,
    TRIM(Language) 'language',
    IsOfficial,
    Percentage
FROM
    `mhq`.`countrylanguage`;

-- Length Operator returns the length of the string
SELECT 
    CountryCode,
    UPPER(Language) Language,
    LENGTH(Language) 'Language Length',
    IsOfficial,
    Percentage
FROM
    `mhq`.`countrylanguage`
WHERE
    LENGTH(Language) > 15
;
    
SELECT 
      LOWER(CountryCode) AS 'code', Language, IsOfficial, Percentage
FROM
    `mhq`.`countrylanguage`; 

-- CONCAT combines two string into one
SELECT 
    Code, Name, CONCAT(Continent, Region) 'Location thing', LocalName, GovernmentForm
FROM
    `mhq`.`country`;

-- CONCAT_WS - Concatenate using the seperator specified as the first parameter
SELECT 
    Code, Name, CONCAT_WS('', Continent, Region) 'Location thing', LocalName, GovernmentForm
FROM
    `mhq`.`country`;
    
SELECT 
    Code, Name, CONCAT_WS(', ', Continent, Region) 'Location thing', LocalName, GovernmentForm
FROM
    `mhq`.`country`;
    
SELECT 
    Code, Name, CONCAT_WS(' - ', Continent, Region) 'Location thing', LocalName, GovernmentForm
FROM
    `mhq`.`country`;
