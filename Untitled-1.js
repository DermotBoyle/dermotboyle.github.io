const express = require("express");
const app = express();
const port = 3000;

const superheroes = [
  { name: "Superman", Superpower: "flying" },
  { name: "Green Lantern", Superpower: "Green Flash" },
  { name: "Alena", Superpower: "VeganPower, sometimes drinks non-vegan wine" }
];

app.get("/api/superheroes", (req, res) => {
  res.send(superheroes);
});

app.post("/api/superheroes", (req, res) => {
  const lastItem = superheroes[superheroes.length - 1];
  const lastName = lastItem.name;
  const superhero = {
    name: req.body.name,
    superpower: req.body.superpower
  };

  superheroes.push(superhero);
  res.send(superhero);
});

app.put("/api/superheroes/name", (req, res) => {});

app.listen(port, () => console.log(`Express is running on ${port}`));
