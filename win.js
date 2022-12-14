import { width, height } from "./functions.js";

class win extends Phaser.Scene {
  constructor(){
    super();
  }

  preload(){
    this.load.audio("click", ["sounds/click.wav"]);
  }
  
  create(){
    // Config do som do clique
    var click = this.sound.add("click", {lopp: false});
    click.setVolume(0.040);
    
    this.add.text(window.innerWidth / 2, 100, "Parabéns por finalizar o jogo!!!", { fontFamily: "Arial", fontSize:60 }).setOrigin(0.5);
      
    this.add.text(window.innerWidth / 2, 250, "Todas as naves inimigas foram derrotadas.", { fontFamily: "Arial", fontSize:40 }).setOrigin(0.5);
      
    this.button = this.add.rectangle(0, 0, 0, 0, 0x0f0);
    this.text = this.add.text(window.innerWidth / 2, window.innerHeight / 1.8, 'Voltar', { fill: '#ffffff', fontFamily: "Arial", fontSize:40 }).setOrigin(0.5);
    this.button.width = this.text.width + 10;
    this.button.height = this.text.height + 10;
    this.button.x = this.text.x - (this.text.width / 2) - 5;
    this.button.y = this.text.y - (this.text.height / 2) - 5;
    this.button.on('pointerover', () => { this.text.setStyle({ fill: 'yellow'})});
    this.button.on('pointerout', () => { this.text.setStyle({ fill: 'white'})});
    this.button.setInteractive().on("pointerdown", () => {
      click.play();
      this.scene.start("menuscene");
    });
  }
  
  update(){

  }
}

export default win;