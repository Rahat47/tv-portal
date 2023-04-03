import { Router } from "../../router";
import { PageView } from "../../view/pageView";
import { EmptyCard } from "../cards/emptyCard";
import { Component } from "../component";

const games = [
    {
        id: 1,
        name: "Game 1",
        image: "https://via.placeholder.com/420x280?text=Game+1",
        path: "game1",
    },
    {
        id: 2,
        name: "Game 2",
        image: "https://via.placeholder.com/420x280?text=Game+2",
        path: "game2",
    },
    {
        id: 3,
        name: "Game 3",
        image: "https://via.placeholder.com/420x280?text=Game+3",
        path: "game3",
    },
    // {
    //     id: 4,
    //     name: "Game 4",
    //     image: "https://via.placeholder.com/420x280?text=Game+4",
    //     path: "game4",
    // },
];

export class Hero extends Component<HTMLElement, Element, PageView> {
    constructor(view: PageView) {
        super("app", view);
        this.templateString = this.heroHTML();
        this.element = this.createElement(this.templateString);
        this.attach(false);
        this.configure();
    }

    // private heroHTML() {
    //     return `
    // 	<div class="hero">
    // 		<h1 class="hero-title">
    // 			<span class="block">Stay on top of </span>
    // 			<span class="block">the important stuff</span>
    // 		</h1>
    // 		<p class="hero-description">
    // 			With kaamkar, effortlessly identify what needs to get done, organize tasks, and get a clearer picture of the project timeline.
    // 		</p>
    // 		<div class="hero-btn-container hero-projects-link">
    // 			<button type="button" class="hero-add-btn newproject">
    // 				Create Project
    // 			</button>
    // 			<button type="button" class="hero-add-btn game1 ">
    // 				Game 1
    // 			</button>
    // 			<button type="button" class="hero-add-btn game2 ">
    // 				Game 2
    // 			</button>
    // 			<button type="button" class="hero-add-btn game3 ">
    // 				Game 3
    // 			</button>
    // 		</div>
    // 	</div>
    // `;
    // }
    private heroHTML() {
        const emptyCard = new EmptyCard(this.view, "More Games Coming Soon");

        return `
        <div class="hero"> 
        <h2 class="hero-title">Grid Container Title</h2>
        <ul role="list" class="hero-inner">
        
        ${games
            .map(
                game => `
        <li class="relative">
        <div class="hero-card">
        <a href="#" 
        class="game${game.id}">
          <img class="hero-card--image" src="${game.image}" alt="Card Image">
        </a>
        <div class="hero-card--info">
          <div class="hero-card--title">${game.name}</div>
        </div>
      </div>
        </li>
        `
            )
            .join("")}

            ${emptyCard.element.outerHTML}

      </ul>
        </div>
		`;
    }

    configure() {
        // const addProjectBtn = this.element.querySelector(
        //     ".newproject"
        // ) as HTMLElement;
        // addProjectBtn.addEventListener("click", this.onAddBtnClicked);

        const gameBtn = this.element.querySelector(".game1") as HTMLElement;
        gameBtn.addEventListener("click", this.onGameBtnClicked);

        const game2Btn = this.element.querySelector(".game2") as HTMLElement;
        game2Btn.addEventListener("click", this.onGame2BtnClicked);

        const game3Btn = this.element.querySelector(".game3") as HTMLElement;
        game3Btn.addEventListener("click", this.onGame3BtnClicked);
    }

    // private onAddBtnClicked() {
    //     history.pushState(null, "", "projects");
    //     new Router().route();
    // }

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
