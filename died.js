import { width, height } from "./functions.js";

class diedscene extends Phaser.Scene {
  constructor(){
    super();
  }
  
  preload(){
     this.load.audio("click", ["sounds/click.wav"]);
  }
  
  create(){
    // Config de som do clique
    var click = this.sound.add("click", {lopp: false});
    click.setVolume(0.040);
    
    this.add.text(window.innerWidth / 2, 100, "Você morreu !!!", { fontFamily: "Arial", fontSize:100 }).setOrigin(0.5);
      
    // Mostra os pontos
    this.add.text(window.innerWidth / 2, window.innerHeight / 2.8, "Pontuação: " + localStorage.getItem("score"), { fontFamily: "Arial", fontSize:75 }).setOrigin(0.5);

    // Mostra o recorde
    this.add.text(window.innerWidth / 2, window.innerHeight / 2.0, "Recorde: " + localStorage.getItem("best"), { fontFamily: "Arial", fontSize:75 }).setOrigin(0.5);

    // Depois criar um reset de recorde -> localStorage.setItem("best", 0);

    this.button = this.add.rectangle(0, 0, 0, 0, 0x000080);
    this.text = this.add.text(window.innerWidth / 2, window.innerHeight / 1.6, 'Voltar para o menu', { fill: '#ffffff', fontFamily: "Arial", fontSize:40 }).setOrigin(0.5);
    this.button.width = this.text.width + 15;
    this.button.height = this.text.height + 15;
    this.button.x = this.text.x - (this.text.width / 2) - 5;
    this.button.y = this.text.y - (this.text.height / 2) - 5;
    this.button.on('pointerover', () => { this.text.setStyle({ fill: 'yellow'})});
    this.button.on('pointerout', () => { this.text.setStyle({ fill: 'white'})});
    this.button.setInteractive().on('pointerdown', () => {
      click.play();
      this.scene.start("menuscene");
    });

  }
  
  update(){

  }
}

export default diedscene;