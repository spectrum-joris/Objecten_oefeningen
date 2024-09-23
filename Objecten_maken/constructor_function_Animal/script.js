function Dier(naam, soort, leeftijd, afbeelding) {
  this.naam = naam;
  this.soort = soort;
  this.leeftijd = leeftijd;
  this.afbeelding = afbeelding;
  this.geluid = function() {
    return `${this.naam} maakt een geluid!`;
  };
}

const dieren = [
  new Dier("Bella", "Hond", 3, "https://placedog.net/500"),
  new Dier("Whiskers", "Kat", 2, "https://placekitten.com/500/500")
];

document.getElementById("output").innerHTML = dieren.map(dier => `
  <div class="card" style="width: 18rem;">
    <img src="${dier.afbeelding}" class="card-img-top" alt="${dier.naam}">
    <div class="card-body">
      <h5 class="card-title">${dier.naam}</h5>
      <p class="card-text">${dier.naam} is een ${dier.soort} en is ${dier.leeftijd} jaar oud. Geluid: ${dier.geluid()}</p>
    </div>
  </div>
`).join('');
