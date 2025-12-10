import { App } from "../system/App"; 

export class Field { //knows row and column, whether a tile (which is positioned in pixels) is selected or not 
    constructor(row, col) {
        this.row = row; //vertical
        this.col = col; //horizontal

        this.sprite = App.sprite("field");
        this.sprite.x = this.position.x;
        this.sprite.y = this.position.y; //moves sprite from point a to b
        this.sprite.anchor.set(0.5);
        this.sprite.alpha = 0.45;

        this.selected = App.sprite("field");
        this.sprite.addChild(this.selected);
        this.selected.visible = false;
        this.selected.anchor.set(0.2);

    }

    unselect() {
        this.selected.visible = true;
    }

    select() {
        this.selected.visible = false; 
    }

    //works as grid
    get position() {
        return {
            x: this.col * this.sprite.width,
            y: this.row * this.sprite.height
        };
    }


    setTile(tile) {
        this.tile = tile;
        tile.field = this;
        tile.setPosition(this.position);
    }
}
