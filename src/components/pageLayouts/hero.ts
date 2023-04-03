import { Router } from "../../router";
import { PageView } from "../../view/pageView";
import { Component } from "../component";

export class Hero extends Component<HTMLElement, Element, PageView> {
  constructor(view: PageView) {
    super("app", view);
    this.templateString = this.heroHTML();
    this.element = this.createElement(this.templateString);
    this.attach(false);
    this.configure();
  }

  private heroHTML() {
    return `
			<div class="hero">
				<h1 class="hero-title">
					<span class="block">Stay on top of </span>
					<span class="block">the important stuff</span>
				</h1>
				<p class="hero-description">
					With kaamkar, effortlessly identify what needs to get done, organize tasks, and get a clearer picture of the project timeline.
				</p>
				<div class="hero-btn-container hero-projects-link">
					<button type="button" class="hero-add-btn newproject">
						Create Project
					</button>
					<button type="button" class="hero-add-btn game1 ">
						Game 1
					</button>
					<button type="button" class="hero-add-btn game2 ">
						Game 2
					</button>
					<button type="button" class="hero-add-btn game3 ">
						Game 3
					</button>
				</div>
			</div>
		`;
  }

  configure() {
    const addProjectBtn = this.element.querySelector(
      ".newproject"
    ) as HTMLElement;
    addProjectBtn.addEventListener("click", this.onAddBtnClicked);

    const gameBtn = this.element.querySelector(".game1") as HTMLElement;
    gameBtn.addEventListener("click", this.onGameBtnClicked);

    const game2Btn = this.element.querySelector(".game2") as HTMLElement;
    game2Btn.addEventListener("click", this.onGame2BtnClicked);

    const game3Btn = this.element.querySelector(".game3") as HTMLElement;
    game3Btn.addEventListener("click", this.onGame3BtnClicked);
  }

  private onAddBtnClicked() {
    history.pushState(null, "", "projects");
    new Router().route();
  }

  private onGameBtnClicked() {
    history.pushState(null, "", "game1");
    new Router().route();
  }

  private onGame2BtnClicked() {
    history.pushState(null, "", "game2");
    new Router().route();
  }

  private onGame3BtnClicked() {
    history.pushState(null, "", "game3");
    new Router().route();
  }
}
