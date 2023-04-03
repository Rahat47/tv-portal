import 'phaser'
import MainScene from './scripts/scenes/mainScene'
import PreloadScene from './scripts/scenes/preloadScene'

import { PageView } from '../../view/pageView';
import { Component } from '../../components/component';

export class GameComp extends Component<HTMLElement, Element, PageView> {
  constructor(view: PageView) {
    super('app', view);
    this.templateString = this.gameHTML();
    this.element = this.createElement(this.templateString);
    this.attach(false);
    this.configure();

    const DEFAULT_WIDTH = 1024;
    const DEFAULT_HEIGHT = 600;

    const config = {
      type: Phaser.AUTO,
      backgroundColor: '#ffffff',
      scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
      },
      scene: [PreloadScene, MainScene],
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: { y: 400 }
        }
      }
    }

    const game = new Phaser.Game(config)
  }

  private gameHTML() {
    return `
      <div id="phaser-game"></div>
    `;
  }

  configure() {}
}
