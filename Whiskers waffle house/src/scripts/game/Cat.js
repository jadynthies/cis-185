
import * as PIXI from "pixi.js";
import { App } from "../system/App";

export class Cat {
	constructor() {
		//Using for horizontal spritesheet with 4 frames *All math AI disclosure*
		const texture = App.res("petCat");
		const frameWidth = texture.width / 4;
		const frameHeight = texture.height;
		this.frames = [];
		for (let i = 0; i < 4; i++) {
			this.frames.push(new PIXI.Texture(texture, new PIXI.Rectangle(i * frameWidth, 0, frameWidth, frameHeight)));
		}

		this.sprite = new PIXI.Sprite(this.frames[0]);
		this.sprite.anchor.set(0.75, 1.2);
		this.sprite.scale.set(4); // size of cat

		//position on the bottom right
		this.sprite.x = window.innerWidth - frameWidth * this.sprite.scale.x / 2 - 40;
		this.sprite.y = window.innerHeight - 40;

		this.currentFrame = 0;
		this.frameTicker = 0;

		//Animate 
		this.animateSprite();
	}

	animateSprite() {
		//PIXI.Ticker to update the frame
		PIXI.Ticker.shared.add(this.updateFrame, this);
	}

	updateFrame(delta) {
		this.frameTicker += delta;
		if (this.frameTicker > 8) { // change frame every 8 ticks (the higher the # the slower animation)
			this.currentFrame = (this.currentFrame + 1) % this.frames.length;
			this.sprite.texture = this.frames[this.currentFrame];
			this.frameTicker = 0;
		}
	}
}
