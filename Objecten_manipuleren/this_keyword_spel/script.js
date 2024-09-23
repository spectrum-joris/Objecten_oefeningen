const spel = {
  naam: "Pacman",
  score: 0,
  afbeelding: "https://via.placeholder.com/150/FFFF00/000000",
  verhoogScore: function() {
    this.score += 10;
    this.toonSpel();
  },
  toonSpel: function() {
    document.getElementById("output").innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${this.afbeelding}" class="card-img-top" alt="${this.naam}">
        <div class="card-body">
          <h5 class="card-title">${this.naam}</h5>
          <p class="card-text">Score: ${this.score}</p>
          <button id="verhoogScore" class="btn btn-primary">Verhoog Score</button>
        </div>
      </div>
    `;
    document.getElementById("verhoogScore").addEventListener("click", () => this.verhoogScore());
  }
};

spel.toonSpel();
