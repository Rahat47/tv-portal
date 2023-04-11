import { Footer } from "../components/pageLayouts/footer";
import { HomeGrid } from "../components/pageLayouts/homeGrid";
import { Mesh } from "../components/pageLayouts/mesh";
import { NavBar } from "../components/pageLayouts/navBar";
import { PageView } from "./pageView";

const games: HomeGridItem[] = [
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
];

const learning: HomeGridItem[] = [
    {
        id: 1,
        name: "Learning 1",
        image: "https://via.placeholder.com/420x280?text=Learning+1",
        path: "learning1",
    },
    {
        id: 2,
        name: "Learning 2",
        image: "https://via.placeholder.com/420x280?text=Learning+2",
        path: "learning2",
    },
    {
        id: 3,
        name: "Learning 3",
        image: "https://via.placeholder.com/420x280?text=Learning+3",
        path: "learning3",
    },
];

export class HomeView extends PageView {
    constructor() {
        super();
    }

    render() {
        this.clear();
        new Mesh(this);
        new NavBar(this);
        new HomeGrid(this, "Games", games);
        new HomeGrid(this, "Learning", learning);
        new Footer(this);
    }
}
