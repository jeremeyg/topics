class Music {
  constructor(band, songTitle) {
    this.band = band;
    this.songTitle = songTitle;
  }
  display() {
    console.log(`The ${this.band} will sing ${this.songTitle}`);
  }
}

const band1 = new Music("franco", " beautiful diversion");
band1.display();
