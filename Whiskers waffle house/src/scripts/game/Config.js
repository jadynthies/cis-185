import { Game } from "./Game";
import { Tools } from "../system/Tools";

//This code keeps every
export const Config = {
    //asset loader: loads all assets in "sprites" folder
    loader: Tools.massiveRequire(require["context"]('./../../sprites/', true, /\.(mp3|png|jpe?g)$/)),
    startScene: Game,
    tilesColors: ['cheese', 'pancake', 'pizza', 'sandwhich', 'strawberry-cake', 'toast'],
    board: { //board size
        rows: 8,
        cols: 8
    },
    combinationRules: [[ //match-3 AND match-4 patterns --> video follow along
        {col: 1, row: 0}, {col: 2, row: 0},
    ], [
        {col: 0, row: 1}, {col: 0, row: 2},
    ], [
        {col: 1, row: 0}, {col: 2, row: 0}, {col: 3, row: 0},
    ], [
        {col: 0, row: 1}, {col: 0, row: 2}, {col: 0, row: 3},
    ]] //
};