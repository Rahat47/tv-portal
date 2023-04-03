import { Footer } from "../components/pageLayouts/footer";
// import { Mesh } from "../components/pageLayouts/mesh";
import { NavBar } from "../components/pageLayouts/navBar";
// import { NotFound } from "../components/pageLayouts/notFound";
import { PageView } from "./pageView";
import { GameComp } from "../games/game1";
import { Game2Comp } from "../games/game2";
import { Game3Comp } from "../games/game3";

export class GameView extends PageView {
    private igame: integer = 0;

    constructor(igame: integer) {
        super();
        this.igame = igame;
    }

    render() {
        this.clear();
        new NavBar(this);
        if (this.igame === 1) {
            new GameComp(this);
        } else if (this.igame === 2) {
            new Game2Comp(this);
        } else if (this.igame === 3) {
            new Game3Comp(this);
        }
        //new NotFound(this);
        new Footer(this);
    }
}
