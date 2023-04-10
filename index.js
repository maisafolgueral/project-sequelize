(async () => {
  const Planet = require("./models/Planet");

  const updatePlanets = await Planet.findByPk(4);
  updatePlanets.name = "Jupiter";
  await updatePlanets.save();

  /* Criação de planetas no banco
    const newPlanet = await Planet.create({
    name: "Venus",
    position: 5,
  });

    const seePlanets = await Planet.findAll({
    where: {
      name: "Terra",
    },
  });
  */

  console.log(updatePlanets);
})();
