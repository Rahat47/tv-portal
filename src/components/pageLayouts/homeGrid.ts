import { Router } from "../../router";
import { PageView } from "../../view/pageView";
import { EmptyCard } from "../cards/emptyCard";
import { Component } from "../component";

export class HomeGrid extends Component<HTMLElement, Element, PageView> {
    title: string;
    items: HomeGridItem[];

    constructor(view: PageView, title: string, items: HomeGridItem[]) {
        super("app", view);
        this.title = title;
        this.items = items;
        this.templateString = this.heroHTML();
        this.element = this.createElement(this.templateString);
        this.attach(false);
        this.configure();
        new EmptyCard(
            this.view,
            `More ${this.title} Coming Soon`,
            `hero-grid-${this.title}`
        );
    }

    private heroHTML() {
        const html = String.raw;

        return html`
            <div class="hero">
                <h2 class="hero-title">${this.title || "Untitled"}</h2>
                <ul role="list" class="hero-inner" id="hero-grid-${this.title}">
                    ${this.items
                        .map(
                            game => `
        <li class="relative">
        <div class="hero-card">
        <a 
        class="${game.path} anchor">
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
                </ul>
            </div>
        `;
    }

    configure() {
        this.items.forEach(item => {
            const gameBtn = this.element.querySelector(
                `.${item.path}`
            ) as HTMLElement;
            gameBtn.addEventListener("click", () => {
                this.onGameBtnClicked(item.id);
            });
        });
    }

    private onGameBtnClicked(id: number) {
        const game = this.items.find(item => item.id === id);
        if (game) {
            const path = game.path;
            history.pushState(null, "", path);
            new Router().route();
        }
    }
}
