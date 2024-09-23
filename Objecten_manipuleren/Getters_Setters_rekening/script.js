const rekening = {
  _saldo: 100,
  afbeelding: "https://via.placeholder.com/150/00FF00/000000",
  get saldo() {
    return this._saldo;
  },
  set saldo(waarde) {
    this._saldo = waarde;
    this.toonRekening();
  },
  toonRekening: function() {
    document.getElementById("output").innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${this.afbeelding}" class="card-img-top" alt="Bankkaart">
        <div class="card-body">
          <h5 class="card-title">Bankrekening</h5>
          <p class="card-text">Saldo: €${this.saldo}</p>
          <button id="veranderSaldo" class="btn btn-primary">Verander Saldo</button>
        </div>
      </div>
    `;
    document.getElementById("veranderSaldo").addEventListener("click", () => this.saldo = 150);
  }
};

rekening.toonRekening();
