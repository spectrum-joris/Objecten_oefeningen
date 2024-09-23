function Persoon(naam, leeftijd, hobby, afbeelding) {
    this.naam = naam;
    this.leeftijd = leeftijd;
    this.hobby = hobby;
    this.afbeelding = afbeelding;
  }
  
  const personen = [
    new Persoon("Emma", 25, "Schilderen", "https://randomuser.me/api/portraits/women/1.jpg"),
    new Persoon("Liam", 30, "Lezen", "https://randomuser.me/api/portraits/men/1.jpg")
  ];
  
  const output = document.getElementById("output");
  output.innerHTML = personen.map(persoon => `
    <div class="card" style="width: 18rem;">
      <img src="${persoon.afbeelding}" class="card-img-top" alt="${persoon.naam}">
      <div class="card-body">
        <h5 class="card-title">${persoon.naam}</h5>
        <p class="card-text">${persoon.naam} is ${persoon.leeftijd} jaar oud en houdt van ${persoon.hobby}.</p>
      </div>
    </div>
  `).join('');
  