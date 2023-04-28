import { Modal } from "./modal";
import { HomeView } from "../../view/homeView/homeView";

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

        return html`
            <div
                class="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            >
                <div
                    class="form-modal-bg hidden modal-bg-ease-out"
                    id="add-item-modal-background"
                ></div>
                <div class="modal-container" id="add-item-modal-container">
                    <div class="form-container" id="add-item-modal-overlay">
                        <div
                            class="form-border modal-ease-out"
                            id="add-item-modal"
                        >
                            <div class="form-content">
                                <h3 class="form-title">Create a new item</h3>
                                <form>
                                    <div class="input-container">
                                        <label
                                            class="form-label"
                                            id="add-item-title-label"
                                            >Item name</label
                                        >
                                        <input
                                            type="text"
                                            class="form-input"
                                            id="add-item-title-input"
                                        />
                                        <p class="form-input-description">
                                            Name of your item
                                        </p>
                                    </div>
                                    <div class="input-container">
                                        <label class="form-label"
                                            >Item description</label
                                        >
                                        <textarea
                                            rows="3"
                                            class="form-input"
                                            id="add-item-description-input"
                                        ></textarea>
                                        <p class="form-input-description">
                                            Brief description of your item
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        class="add-btn"
                                        id="add-item-form-submit-btn"
                                    >
                                        Create Item
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    configure() {
        const addItemForm = this.element.querySelector("form") as HTMLElement;
        (this.element as HTMLElement).addEventListener(
            "click",
            this.fadeOut.bind(this)
        );
        // addItemForm.addEventListener("submit", this.onSubmit.bind(this));
    }

    fadeIn() {
        this.renderModal(
            "add-item-modal",
            "add-item-modal-background",
            "add-item-modal-container"
        );
    }

    private fadeOut(e: MouseEvent) {
        const modalOverlay = (e.target as HTMLElement).matches(
            "#add-item-modal-overlay"
        );

        if (modalOverlay) {
            (this.view as HomeView).settingsModalClosed();
            this.removeModal(
                "add-item-modal",
                "add-item-modal-background",
                "add-item-modal-container"
            );
        }
    }
}
