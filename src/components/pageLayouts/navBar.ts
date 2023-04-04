import { Router } from "../../router";
import { PageView } from "../../view/pageView";
import { Component } from "../component";
const Logo = require("../../assets/logo.png");

export class NavBar extends Component<HTMLElement, Element, PageView> {
    private animationInProgress = false;

    constructor(view: PageView) {
        super("app", view);
        this.templateString = this.navBarHTML();
        this.element = this.createElement(this.templateString);
        this.attach(false);
        this.configure();
    }

    private navBarHTML() {
        const html = String.raw;

        return html`
            <nav class="nav">
                <a href="/" class="nav-title internal-nav-link">
                    <img class="nav-logo" src="${Logo}" />
                    <span class="nav-title-text">kaamkar</span>
                </a>
                <div class="nav-toggle-container">
                    <button class="nav-toggle-btn">
                        <svg
                            class="nav-toggle-icon"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path
                                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            />
                        </svg>
                    </button>
                </div>
                <div class="nav-sub-container">
                    <div class="nav-links-container">
                        <a href="/projects" class="nav-link internal-nav-link">
                            Projects
                        </a>
                        <a
                            class="nav-link"
                            href="https://nrabhiram.xyz/"
                            target="_blank"
                        >
                            Blog
                        </a>
                    </div>
                </div>
                <div class="mobile-nav sub-nav-collapsed">
                    <div class="nav-links-container">
                        <a href="/projects" class="nav-link internal-nav-link">
                            Projects
                        </a>
                        <a
                            class="nav-link"
                            href="https://nrabhiram.xyz/"
                            target="_blank"
                        >
                            Blog
                        </a>
                    </div>
                </div>
            </nav>
        `;
    }

    configure() {
        const toggleBtn = this.element.querySelector(".nav-toggle-btn");
        toggleBtn?.addEventListener("click", this.toggleBtnClicked.bind(this));
        (this.element as HTMLElement).addEventListener(
            "click",
            this.linkClickHandler
        );
    }

    private linkClickHandler(e: MouseEvent) {
        const navLink = (e.target as HTMLElement).matches(
            ".internal-nav-link, .internal-nav-link *"
        );
        if (navLink) {
            e.preventDefault();
            const link = (e.target as HTMLElement).closest(
                ".internal-nav-link"
            );
            history.pushState(null, "", (link as HTMLAnchorElement).href);
            new Router().route();
        }
    }

    private toggleBtnClicked() {
        const nav = document.querySelector(".mobile-nav") as HTMLElement;
        if (nav.classList.contains("sub-nav-collapsed")) {
            if (!this.animationInProgress) {
                this.animationInProgress = true;
                nav.classList.remove("sub-nav-collapsed");
                nav.classList.add("sub-nav-open");
                nav.style.maxHeight = nav.scrollHeight + "px";
                setTimeout(() => {
                    this.animationInProgress = false;
                });
            }
        } else {
            if (!this.animationInProgress) {
                this.animationInProgress = true;
                nav.style.maxHeight = "0px";
                setTimeout(() => {
                    nav.classList.remove("sub-nav-open");
                    nav.classList.add("sub-nav-collapsed");
                    this.animationInProgress = false;
                }, 200);
            }
        }
    }
}
