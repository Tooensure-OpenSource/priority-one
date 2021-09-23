
import database from "src/assets/data/nav/navs.json";
import { Nav} from "./nav.model";

export class NavService {
    private nav : Nav[] = database;
    
    GetNavs() {
        return this.nav.slice()
    }

    GetNav(id:number) {
        return this.nav.slice()
    }
}
