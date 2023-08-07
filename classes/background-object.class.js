class BackgroundObject extends MovableObject {
        /**
     * Represents a background object in the game.
     * @constructor
     * @param {string} imagePath - The path to the image file for the background object.
     * @param {number} x - The initial x-coordinate of the background object.
     */
    height = 480;
    width = 720;

    constructor(imagePath, x) {
        super();
        this.loadImage(imagePath);
                /**
         * The x-coordinate of the background object.
         * @type {number}
         */
        this.x = x;
        /**
         * The y-coordinate of the background object.
         * The object is positioned at the bottom of the screen.
         * @type {number}
         */
        this.y = 480 - this.height;
    }
}