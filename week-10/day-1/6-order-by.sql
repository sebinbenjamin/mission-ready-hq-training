SELECT 
    *
FROM
    world.countryLanguage;

SELECT 
    *
FROM
       world.countryLanguage
ORDER BY Language ASC;

-- Same as ASC as it is the default ordering; 
SELECT 
    *
FROM
       world.countryLanguage
ORDER BY Language;

SELECT 
    *
FROM
       world.countryLanguage
ORDER BY Language DESC; 

-- To order within CountryCodes having the same Language 
SELECT 
    *
FROM
       world.countryLanguage
ORDER BY Language ASC, CountryCode; 

SELECT 
    *
FROM
    world.countryLanguage
ORDER BY Language ASC , CountryCode DESC; 
