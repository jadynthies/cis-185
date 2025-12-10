import { gsap } from "gsap"; //used for animations
import { App } from "../system/App";

export class Tile {
    constructor(color) {
        this.color = color; //tile appearance
        this.sprite = App.sprite(this.color);
        this.sprite.anchor.set(0.5); //achors in the center
    }

    setPosition(position) {
        this.sprite.x = position.x;
        this.sprite.y = position.y;
    }

    //animtes the desserts or sprites to move to a different tile *Copilot disclosure*
    moveTo(position, duration, delay, ease) {
        return new Promise(resolve => { //games waits for animation to complete
            gsap.to(this.sprite, {
                duration,
                delay,
                ease, //animation curve (starts fast ends slow)
                pixi: {
                    x: position.x,
                    y: position.y
                },
                onComplete: () => {
                    resolve()
                }
            });
        });
    }
    isNeighbour(tile) {
        return Math.abs(this.field.row - tile.field.row) + Math.abs(this.field.col - tile.field.col) === 1
    }

    remove() { //removes tile from board after they've been matched
        if (!this.sprite) {
            return;
        }
        this.sprite.destroy();
        this.sprite = null;
        if (this.field) {
            this.field.tile = null;
            this.field = null;
        }
    }

    fallDownTo(position, delay) { //falling animation when tiles fall into empty spaces
        return this.moveTo(position, 0.5, delay, "bounce.out");
    }
}