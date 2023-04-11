const express = require("express");
const routes = express.Router();

const PlanetController = require("../Controller/PlanetController");
const SatelliteController = require("../Controller/SatelliteController");
const CapController = require("../Controller/CapController");
const SpaceshipController = require("../Controller/SpaceshipController");

// Rotas de Planets
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

// Rotas de Associações
routes.post("/planet/:planetId/satellites", SatelliteController.store);
routes.get("/planet/:planetId/satellites", SatelliteController.index);

// Rotas de Cap
routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);

// Rotas de SpaceShip
routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get("/caps/:capId/spaceships", SpaceshipController.index);

module.exports = routes;
