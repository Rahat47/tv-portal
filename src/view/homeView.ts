import { Footer } from "../components/pageLayouts/footer";
import { HomeGrid } from "../components/pageLayouts/homeGrid";
import { Mesh } from "../components/pageLayouts/mesh";
import { PageView } from "./pageView";
import gamesJson from "../jsons/home-games.json";
import learningJson from "../jsons/home-learning.json";
import { SettingsModal } from "../components/modals/settingsModal";

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
        new Mesh(this);
        // new NavBar(this);
        new HomeGrid(this, "Games", gamesJson);
        new HomeGrid(this, "Learning", learningJson);
        new Footer(this, this.settingsModalClicked.bind(this));
    }
}
