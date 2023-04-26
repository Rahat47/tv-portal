import { Footer } from "../components/pageLayouts/footer";
import { HomeGrid } from "../components/pageLayouts/homeGrid";
import { Mesh } from "../components/pageLayouts/mesh";
import { PageView } from "./pageView";
import gamesJson from "../jsons/home-games.json";
import learningJson from "../jsons/home-learning.json";

export class HomeView extends PageView {
    constructor() {
        super();
    }

    render() {
        this.clear();
        new Mesh(this);
        // new NavBar(this);
        new HomeGrid(this, "Games", gamesJson);
        new HomeGrid(this, "Learning", learningJson);
        new Footer(this);
    }
}
