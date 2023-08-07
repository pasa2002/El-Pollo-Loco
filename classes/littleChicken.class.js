class LittleChicken extends MovableObject {
    /**
     * Represents a small chicken enemy in the game.
     * @constructor
     */
    littleChickenEnergy = 10;

    height = 50;
    width = 50;
    y = 380;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ]

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ]

    constructor() {
        
        // Load chicken images and start animation
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.x = 200 + Math.random() * 7000; // Zahl zwischen 200 und 700(bei der Funktion random ist eine Zahl nur zwischen 0 und 1)
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.10 + Math.random() * 0.25;
        this.animate();
    }
    /**
     * Initiates the little chicken's animation and behavior.
     */
    animate() {
        let littleChickenMoveInterval = setInterval(() => {
                this.moveLeft();
            },
            1000 / 60);
        let littleChickenAnimationInterval = setInterval(() => {
            if (this.littleChickenEnergy == 0) {
                this.speed = 0;
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 150);
        intervalIDs.push(littleChickenAnimationInterval, littleChickenMoveInterval);
    }
}