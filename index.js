(async () => {
  const Planet = require("./models/Planet");

  /* (CRUD)
    Criação de planetas no banco
    const newPlanet = await Planet.create({
    name: "Venus",
    position: 5,
  });

    Ler os planetas no banco
    const seePlanets = await Planet.findAll({
    where: {
      name: "Terra",
    },
  });

    Atualizar os planetas no banco
    const updatePlanets = await Planet.findByPk(4);
    updatePlanets.name = "Jupiter";
    await updatePlanets.save();

    Deletar os planetas no banco
    const deletePlanets = await Planet.findByPk(4);
    console.log(deletePlanets);
    await deletePlanets.destroy();
  */
})();
