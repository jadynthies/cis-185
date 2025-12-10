import { App } from "../system/App";
import { Tools } from "../system/Tools";
import { Tile } from "./Tile";

//randomly selects a tile from the games available tile colors to add to the board
export class TileFactory {
    static generate() {
        //types/ colors of tiles
        const color = App.config.tilesColors[Tools.randomNumber(0, App.config.tilesColors.length - 1)];
        return new Tile(color);
    }
}
