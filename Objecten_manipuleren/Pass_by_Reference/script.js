const object1 = { kleur: "blauw", afbeelding: "https://via.placeholder.com/150/0000FF/808080" };
const object2 = object1;

object2.kleur = "groen";

document.getElementById("output").innerHTML = `
  <div class="card" style="width: 18rem;">
    <img src="${object1.afbeelding}" class="card-img-top" alt="Object1">
    <div class="card-body">
      <h5 class="card-title">Object1 kleur: ${object1.kleur}</h5>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="${object1.afbeelding}" class="card-img-top" alt="Object2">
    <div class="card-body">
      <h5 class="card-title">Object2 kleur: ${object2.kleur}</h5>
    </div>
  </div>`;
