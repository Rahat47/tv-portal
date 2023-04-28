import { Footer } from "../../components/pageLayouts/footer";
import { HomeGrid } from "../../components/pageLayouts/homeGrid";
import { Mesh } from "../../components/pageLayouts/mesh";
import { PageView } from "../pageView";
// import gamesJson from "../../jsons/home-games.json";
// import learningJson from "../../jsons/home-learning.json";
import { SettingsModal } from "../../components/modals/settingsModal";
import homeViewJson from "./homeView.json";
import { homeViewSchema } from "./homeView.schema";

export class HomeView extends PageView {
    private static settingsModalOpen = false;

    constructor() {
        super();
    }

    settingsModalClicked() {
        if (!HomeView.settingsModalOpen) {
            const settingsModal = new SettingsModal(this);
            settingsModal.fadeIn();
            HomeView.settingsModalOpen = true;
        }
    }

    settingsModalClosed() {
        HomeView.settingsModalOpen = false;
    }

    render() {
        this.clear();

        const homeData = homeViewSchema.parse(homeViewJson);

        const topData = homeData.find(item => item.position === "Top")?.value;
        const bottomData = homeData.find(
            item => item.position === "Bottom"
        )?.value;

        const titleTop =
            topData?.find(item => item.type === "Text")?.message || "Untitled";
        const titleBottom =
            bottomData?.find(item => item.type === "Text")?.message ||
            "Untitled";

        const carouselTop =
            topData?.find(item => item.type === "Carousel")?.items || [];
        const carouselBottom =
            bottomData?.find(item => item.type === "Carousel")?.items || [];

        new Mesh(this);
        // new NavBar(this);
        new HomeGrid(this, titleTop, carouselTop);
        new HomeGrid(this, titleBottom, carouselBottom);
        new Footer(this, this.settingsModalClicked.bind(this));
    }
}
