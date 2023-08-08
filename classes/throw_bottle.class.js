class ThrowBottle extends MovableObject{
        /**
     * Represents a thrown bottle object.
     * @constructor
     * @param {number} x - The initial x-coordinate of the bottle.
     * @param {number} y - The initial y-coordinate of the bottle.
     * @param {boolean} otherDirection - Indicates if the bottle is thrown in the other direction (left or right).
     */
    collided = false;
    world;
    bottleAnimation = false;

    offset = {
        top:10,
        bottom:10,
        left:10,
        right:10
    }
        /**
         * Images representing the bottle's rotation animation.
         * @type {string[]}
         */
    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]
        /**
         * Images representing the bottle's damaged (splash) animation.
         * @type {string[]}
         */
    IMAGES_DAMAGED_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]

    constructor(x, y, otherDirection) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES_BOTTLE);
        this.loadImages(this.IMAGES_DAMAGED_BOTTLE);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.otherDirection = otherDirection;
        if (this.otherDirection == false) {
            this.throwRight();
        } else {
            this.throwLeft();
        }
        this.animate();
    }

    handleCollisionWithEndboss(endboss){
        if(this.isColliding(endboss)){
            this.splashBottle();
        }
    }

        /**
     * Throws the bottle to the right.
     */
    throwRight() {
        this.speedY = 12;
        this.speedX = 5;
        this.applyGravity();
        let throwBottleRightInterval = setInterval(() => {
            this.x += 7;
        }, 1000 / 60);
        intervalIDs.push(throwBottleRightInterval);
        this.otherDirection = false;
    }

        /**
     * Throws the bottle to the left.
     */
    throwLeft() {
        this.speedY = 12;
        this.speedX = -5;
        this.applyGravity();
        let throwBottleLeftInterval = setInterval(() => {
            this.x -= 7;
        }, 1000 / 60);
        intervalIDs.push(throwBottleLeftInterval);
    }
    /**
     * Animates the bottle's rotation.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 1000 / 20);
    }
    /**
     * Initiates the damaged (splash) animation of the bottle.
     */
    splashBottle() {
        this.playAnimation(this.IMAGES_DAMAGED_BOTTLE);
        setTimeout(() => {
            this.splashBottle();
        }, 2000);
    }
}