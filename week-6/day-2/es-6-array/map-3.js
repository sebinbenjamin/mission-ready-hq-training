const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

materials.map((material) => {
  console.log(material);
});

// no {} required as we have just 1 statement
materials.map((material) => console.log(material));

// no () required for the parameters as we have just 1 parameter, ie 'material'
materials.map(material => console.log(material));