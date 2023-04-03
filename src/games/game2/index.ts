import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
// @ts-ignore
import SpineWebGLPlugin from './plugins/SpineWebGLPlugin'

import { PageView } from '../../view/pageView';
import { Component } from '../../components/component';


type scaleMode = 'FIT' | 'SMOOTH'

const DEFAULT_WIDTH: number = 1280
const DEFAULT_HEIGHT: number = 720
const MAX_WIDTH: number = DEFAULT_WIDTH * 1.5
const MAX_HEIGHT: number = DEFAULT_HEIGHT * 1.5
let SCALE_MODE: scaleMode = 'SMOOTH' // FIT OR SMOOTH

export class Game2Comp extends Component<HTMLElement, Element, PageView> {
  constructor(view: PageView) {
    super('app', view);
    this.templateString = this.gameHTML();
    this.element = this.createElement(this.templateString);
    this.attach(false);
    this.configure();

    const config = {
      type: Phaser.WEBGL,
      backgroundColor: '#ffffff',
      parent: 'phaser-game',
      scale: {
        // The game will be scaled manually in the resize()
        mode: Phaser.Scale.NONE,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
      },
      plugins: {
        scene: [{ key: 'SpineWebGLPlugin', plugin: SpineWebGLPlugin, start: true, sceneKey: 'spine' }]
      },
      scene: [PreloadScene, MainScene],
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: { y: 2500 }
        }
      }
    }

    console.log("hello");
    const game = new Phaser.Game(config)
  }

  private gameHTML() {
    return `
      <div id="phaser-game"></div>
    `;
  }

  configure() {}
}
