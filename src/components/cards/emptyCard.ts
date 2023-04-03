import { PageView } from "../../view/pageView";
import { Component } from "../component";

export class EmptyCard extends Component<HTMLElement, Element, PageView> {
    title: string;

    constructor(view: PageView, title: string) {
        super("app", view);
        this.title = title;
        this.templateString = this.emptyCardHTML();
        this.element = this.createElement(this.templateString);
        // this.attach(false);
        this.configure();
    }

    private emptyCardHTML() {
        return `
         <button type="button" class="empty-card">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="empty-card--svg">
         <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
       </svg>
           <span class="empty-card--title">
                ${this.title}
           </span>
         </button>
        `;
    }

    configure() {}
}
