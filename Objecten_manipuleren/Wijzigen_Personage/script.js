const personage = {
  naam: "Hero",
  leeftijd: 20,
  afbeelding: "https://randomuser.me/api/portraits/lego/1.jpg"
};

function toonPersonage() {
  document.getElementById("output").innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${personage.afbeelding}" class="card-img-top" alt="${personage.naam}">
      <div class="card-body">
        <h5 class="card-title">${personage.naam}</h5>
        <p class="card-text">Leeftijd: ${personage.leeftijd}</p>
      </div>
    </div>`;
}

document.getElementById("veranderNaam").addEventListener("click", function() {
  personage.naam = "Legend";
  toonPersonage();
});

document.getElementById("veranderLeeftijd").addEventListener("click", function() {
  personage.leeftijd = 25;
  toonPersonage();
});

toonPersonage();
