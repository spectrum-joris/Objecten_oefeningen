const Boek = {
  beschrijving: function() {
    return `${this.titel} geschreven door ${this.auteur} in ${this.jaar}`;
  }
};

const boek1 = Object.create(Boek);
boek1.titel = "De Hobbit";
boek1.auteur = "J.R.R. Tolkien";
boek1.jaar = 1937;
boek1.afbeelding = "https://m.media-amazon.com/images/I/51G+umW8kEL.jpg";

const boek2 = Object.create(Boek);
boek2.titel = "1984";
boek2.auteur = "George Orwell";
boek2.jaar = 1949;
boek2.afbeelding = "https://m.media-amazon.com/images/I/41JSmWFLgPL.jpg";

const boeken = [boek1, boek2];

document.getElementById("output").innerHTML = boeken.map(boek => `
  <div class="card" style="width: 18rem;">
    <img src="${boek.afbeelding}" class="card-img-top" alt="${boek.titel}">
    <div class="card-body">
      <h5 class="card-title">${boek.titel}</h5>
      <p class="card-text">${boek.beschrijving()}</p>
    </div>
  </div>
`).join('');
