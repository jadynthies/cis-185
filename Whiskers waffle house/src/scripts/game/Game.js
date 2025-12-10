import * as PIXI from "pixi.js";
import { App } from "../system/App";
import { Field } from "./Field";
import { Board } from "./Board";
import { CombinationManager } from "./CombinationManager";
import { Cat } from "./Cat";
    
/*/
sets up the game board, pet cat, 
timer, points, and match system, 
and removes initial matches
/*/
export class Game {
    constructor() {
        this.container = new PIXI.Container();

    this.createBackground();

    // add animated pet cat in the corner
    this.cat = new Cat();
    this.container.addChild(this.cat.sprite);

        const field = new Field(1, 1);
        this.container.addChild(field.sprite);
        
        this.board = new Board();
        this.container.addChild(this.board.container);

        this.board.container.on('tile-touch-start', this.onTileClick.bind(this));

        this.combinationManager = new CombinationManager(this.board);
        this.removeStartMatches();

        this.musicStarted = false;

        //Timer and points bar setup
        this.timeLeft = 60; // seconds
        this.maxPoints = 100;
        this.points = 0;
        this.timerInterval = null;
        this.updateTimerUI();
        this.updatePointsBarUI();
        this.startTimer();
    }

    // checks and removes matches found on the initial board
    removeStartMatches() {
        let matches = this.combinationManager.getMatches();

        while(matches.length) {
            this.removeMatches(matches);

            const fields = this.board.fields.filter(field => field.tile === null);

            fields.forEach(field => {
                this.board.createTile(field);
            });

            matches = this.combinationManager.getMatches();
        }
    }

    createBackground() {
        this.bg = App.sprite("bg");
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;
        this.container.addChild(this.bg);
    }

    startMusic() {
        if (!this.musicStarted) {
            this.musicStarted = true;
            const audio = new Audio(require('../../sounds/music.mp3').default);
            audio.loop = true; //loops audio
            audio.volume = 0.15;
            audio.play();
        }
    }

    playMeow() {
        const audio = new Audio(require('../../sounds/cat-meow.mp3').default);
        audio.volume = 0.6;
        audio.play();
    }

    //plays every time tiles are swapped
    playBloop() {
        const audio = new Audio(require('../../sounds/bloop.mp3').default);
        audio.volume = 0.3;
        audio.play();
    }

    /*/
    match checks and also prevents swapping 
    tiles that aren't directly next to each other
    /*/
    onTileClick(tile) {
        if (this.disabled) {
            return;
        }
        if (this.selectedTile) {
            // select new tile or make swap
            if (!this.selectedTile.isNeighbour(tile)) {
                this.clearSelection(tile);
                this.selectTile(tile);
            } else {
                this.playBloop();
                this.swap(this.selectedTile, tile);
            }


        } else {
            this.selectTile(tile);
        }
    }

    swap(selectedTile, tile, reverse) {
        this.disabled = true;
        selectedTile.sprite.zIndex = 2;

        selectedTile.moveTo(tile.field.position, 0.2);

        this.clearSelection();

        tile.moveTo(selectedTile.field.position, 0.2).then(() => {
            this.board.swap(selectedTile, tile);

            if (!reverse) {
                const matches = this.combinationManager.getMatches();
                if (matches.length) {
                    this.processMatches(matches);
                } else {
                    this.swap(tile, selectedTile, true);
                }
            } else {
                this.disabled = false;
            }
        });
    }

    // Timer logic, counts down every second
    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateTimerUI();
            if (this.timeLeft <= 0) {
                this.onTimeUp();
            }
        }, 1000);
    }

    //updates html timer display
    updateTimerUI() {
        const timerEl = document.getElementById('timer');
        if (timerEl) {
            timerEl.textContent = `Time: ${this.timeLeft}`;
        }
    }

    //ends game when timer hits 0 and restarts (shown later)
    onTimeUp() {
        clearInterval(this.timerInterval);
        setTimeout(() => {
            alert('Time is up!');
            this.restartGame();
        }, 100);
    }

    // Points bar logic, updates bar
    updatePointsBarUI() {
        const pointsBar = document.getElementById('health-bar');
        if (pointsBar) {
            const percent = Math.min(100, (this.points / this.maxPoints) * 100);
            pointsBar.style.width = percent + '%';
        }
    }

    addPoints(amount) {
        this.points += amount;
        if (this.points > this.maxPoints) this.points = this.maxPoints;
        this.updatePointsBarUI();
        if (this.points === this.maxPoints) {
            this.onWin();
        }
    }

    onWin() {
        clearInterval(this.timerInterval);
        setTimeout(() => {
            alert('Congratulations!\nWhiskers is full!');
            this.restartGame();
        }, 100);
    }
    restartGame() {
        // Reset points and timer
        this.points = 0;
        this.timeLeft = 60;
        this.updatePointsBarUI();
        this.updateTimerUI();
        // Resets the board
        if (this.board && this.board.fields) {
            this.board.fields.forEach(field => {
                if (field.tile) {
                    field.tile.remove();
                    field.tile = null;
                }
            });
            this.board.createTiles();
        }
        // Remove any selection
        this.selectedTile = null;
        // Restart timer
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.startTimer();
        // Enable input
        this.disabled = false;
    }

    removeMatches(matches) {
        matches.forEach(match => {
            match.forEach(tile => {
                tile.remove();
            });
        });
    }

    processMatches(matches) {
        this.startMusic();

        //award points for matches, change difficulty here
        let totalPoints = 0;
        matches.forEach(match => {
            totalPoints += match.length * 2.5; //2.5 points per tile in a match. To make harder, go lower
            if (match.length >= 4) {
                this.playMeow();
            }
        });
        if (totalPoints > 0) {
            this.addPoints(totalPoints);
        }

        this.removeMatches(matches);
        this.processFallDown()
            .then(() => this.addTiles())
            .then(() => this.onFallDownOver());
    }

    // tiles falling after matches get removed *Copilot disclosure here down & video follow along*
    onFallDownOver() {
        const matches = this.combinationManager.getMatches();

        if (matches.length) {
            this.processMatches(matches)
        } else {
            this.disabled = false;
        }
    }

    // where tiles are added to fill empty spaces
    addTiles() {
        return new Promise(resolve => {
            const fields = this.board.fields.filter(field => field.tile === null);
            let total = fields.length;
            let completed = 0;

            fields.forEach(field => {
                const tile = this.board.createTile(field);
                tile.sprite.y = -500;
                const delay = Math.random() * 2 / 10 + 0.3 / (field.row + 1);
                tile.fallDownTo(field.position, delay).then(() => {
                    ++completed;
                    if (completed >= total) {
                        resolve();
                    }
                });
            });
        });``
    }

    processFallDown() {
        return new Promise(resolve => {
            let completed = 0;
            let started = 0;

            for (let row = this.board.rows - 1; row >= 0; row--) {
                for (let col = this.board.cols - 1; col >= 0; col--) {
                    const field = this.board.getField(row, col);
    
                    if (!field.tile) {
                        ++started;
                        this.fallDownTo(field).then(() => {
                            ++completed;
                            if (completed >= started) {
                                resolve();
                            }
                        });
                    }
                }
            }
        });
    }

    fallDownTo(emptyField) {
        for (let row = emptyField.row - 1; row >= 0; row--) {
            let fallingField = this.board.getField(row, emptyField.col);

            if (fallingField.tile) {
                const fallingTile = fallingField.tile;
                fallingTile.field = emptyField;
                emptyField.tile = fallingTile;
                fallingField.tile = null;
                return fallingTile.fallDownTo(emptyField.position);
            }
        }

        return Promise.resolve();
    }

    clearSelection() {
        if (this.selectedTile) {
            this.selectedTile.field.unselect();
            this.selectedTile = null;
        }
    }

    selectTile(tile) {
        this.selectedTile = tile;
        this.selectedTile.field.select();
    }
}

/*/
Sets up the game board, pet cat, 
and match system, and removes initial 
matches. Tracks points, plays sounds, 
and restarts game when timer is 
up or player wins.
/*/