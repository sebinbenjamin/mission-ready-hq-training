SELECT 
    IndepYear AS 'Year_of_Indepndence', SurfaceArea AS 'Area'
FROM
    `world`.`country`;


-- Writing AS is optional

SELECT 
    IndepYear 'Year of Indepndence', 'Surface Area'
FROM
    `world`.`country`;

-- The single guotes could be omitted if the provided string is valid without any spaces/forbidden characters
SELECT 
    IndepYear 'Year_of_Indepndence', SurfaceArea 'Area'
FROM
    `world`.`country`;
    
SELECT 
    IndepYear Year_of_Indepndence, SurfaceArea Area
FROM
    `world`.`country`;