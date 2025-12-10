import { App } from "../system/App";

export class CombinationManager {
    constructor(board) {
        this.board = board;
    }

    getMatches() {
        //Stores all valid matches found on board
        let result = [];

        // Loops every field on the board and uses it as a starting point
        this.board.fields.forEach(checkingField => {

            // Goes through each combo rule (config.js)
            App.config.combinationRules.forEach(rule => {

                let matches = [checkingField.tile];

                rule.forEach(position => {

                    // Calculates row/col
                    const row = checkingField.row + position.row;
                    const col = checkingField.col + position.col;

                    // Gets field of coordinates
                    const comparingField = this.board.getField(row, col);

                    //IF the field exists AND the tile has the same name as the starting
                    //tile, THEN it's a match
                    if (comparingField && comparingField.tile.color === checkingField.tile.color) {
                        matches.push(comparingField.tile);
                    }
                });

                if (matches.length === rule.length + 1) {
                    result.push(matches);
                }
            });
        });

        return result;
    }
}