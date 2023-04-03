import "phaser";
import { BootScene } from "./scenes/boot-scene";
import { GameScene } from "./scenes/game-scene";
import { MainMenuScene } from "./scenes/main-menu-scene";

import { PageView } from "../../view/pageView";
import { Component } from "../../components/component";

export class Game3Comp extends Component<HTMLElement, Element, PageView> {
  constructor(view: PageView) {
    super("app", view);
    this.templateString = this.gameHTML();
    this.element = this.createElement(this.templateString);
    this.attach(false);
    this.configure();

    const DEFAULT_WIDTH = 1024;
    const DEFAULT_HEIGHT = 600;

    const config = {
      title: "Flappy Bird",
      url: "https://github.com/digitsensitive/phaser3-typescript",
      version: "2.0",
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT,
      type: Phaser.AUTO,
      parent: "phaser-game",
      scene: [BootScene, MainMenuScene, GameScene],
      input: {
        keyboard: true,
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
        },
      },
      backgroundColor: "#98d687",
      render: { pixelArt: true, antialias: false },
    };

    const game = new Phaser.Game(config);
  }

  private gameHTML() {
    return `
      <div id="phaser-game"></div>
    `;
  }

  configure() {}
}
