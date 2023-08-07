class Chicken extends MovableObject {
    /**
     * Represents a chicken enemy in the game.
     * @constructor
     */
    chickenEnergy = 10;
    height = 70;
    width = 70;
    y = 360;

            /**
         * The array of image paths for the walking animation of the chicken.
         * @type {string[]}
         */
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ]

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 5000; // Zahl zwischen 200 und 700(bei der Funktion random ist eine Zahl nur zwischen 0 und 1)
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.10 + Math.random() * 0.25;
        this.animate();
    }
    /**
     * Animates the chicken's movement and animation.
     */
    animate() {
        let chickenMoveInterval = setInterval(() => {
                this.moveLeft();
            },
            1000 / 60);
        let chickenAnimationInterval = setInterval(() => {
            if (this.chickenEnergy == 0) {
                this.speed = 0;
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);
        intervalIDs.push(chickenMoveInterval, chickenAnimationInterval);
    }
}