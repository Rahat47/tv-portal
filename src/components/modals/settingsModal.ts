import { Modal } from "./modal";
import { HomeView } from "../../view/homeView";

export class SettingsModal extends Modal {
    templateString: string;

    constructor(view: HomeView) {
        super(view);
        this.templateString = this.settingsModalHTML();
        this.element = this.createElement(this.templateString);
        this.attach(true);
        this.configure();
    }

    private settingsModalHTML() {
        const html = String.raw;

        return html` <h1>Settings Modal</h1> `;
    }

    configure() {}
}
