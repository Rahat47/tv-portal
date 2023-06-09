import { PageView } from "../../../view/pageView";
import { Component } from "../../component";
import jsonData from "./emptyCard.json";

export class EmptyCard extends Component<HTMLElement, Element, PageView> {
    title: string;
    svg: string;
    title_class: string;

    constructor(view: PageView, title: string, hostElementId: string) {
        super(hostElementId || "app", view);

        this.title = title;
        this.svg = jsonData.find(item => item?.type === "svg")?.html as string;
        this.title_class = jsonData.find(item => item?.type === "title")
            ?.class as string;
        this.templateString = this.emptyCardHTML();
        this.element = this.createElement(this.templateString);
        this.attach(false);
        this.configure();
    }

    private emptyCardHTML() {
        const html = String.raw;

        return html`
            <button type="button" class="empty-card">
                ${this.svg
                    ? this.svg
                    : `<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="empty-card--svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m6-6H6"
                />
            </svg>`}
                <span
                    class="${this.title_class
                        ? this.title_class
                        : "empty-card--title"}"
                >
                    ${this.title}
                </span>
            </button>
        `;
    }

    configure() {}
}
