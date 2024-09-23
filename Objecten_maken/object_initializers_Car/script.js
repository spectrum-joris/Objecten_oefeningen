const autos = [
  {
    merk: "Tesla",
    model: "Model 3",
    snelheid: 200,
    afbeelding: "https://www.tesla.com/sites/default/files/modelsx-new/social/model-3-hero-social.jpg"
  },
  {
    merk: "BMW",
    model: "i8",
    snelheid: 250,
    afbeelding: "https://cdn.motor1.com/images/mgl/0AN3x/s1/2019-bmw-i8.jpg"
  }
];

document.getElementById("output").innerHTML = autos.map(auto => `
  <div class="card" style="width: 18rem;">
    <img src="${auto.afbeelding}" class="card-img-top" alt="${auto.merk} ${auto.model}">
    <div class="card-body">
      <h5 class="card-title">${auto.merk} ${auto.model}</h5>
      <p class="card-text">Maximale snelheid: ${auto.snelheid} km/h</p>
    </div>
  </div>
`).join('');
