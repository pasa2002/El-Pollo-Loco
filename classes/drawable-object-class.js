class DrawableObject {
    /**
     * Represents a drawable object in the game.
     * @constructor
     */
    constructor() {
        /**
         * The x-coordinate of the drawable object.
         * @type {number}
         */
        this.x = 30;

        /**
         * The y-coordinate of the drawable object.
         * @type {number}
         */
        this.y = 180;

        /**
         * The width of the drawable object.
         * @type {number}
         */
        this.width = 130;

        /**
         * The height of the drawable object.
         * @type {number}
         */
        this.height = 250;

        /**
         * The image element representing the drawable object.
         * @type {Image}
         */
        this.img;

        /**
         * A cache for storing preloaded images.
         * @type {Object}
         */
        this.imageCache = {};

        /**
         * The index of the current image being displayed.
         * @type {number}
         */
        this.currentImage = 0;
    }

        /**
     * Loads an image from the specified path.
     * @param {string} path - The path to the image.
     */
    loadImage(path) {
        this.img = new Image(); //ist wie das img-tag -> this.img = document.getElementById('image'); <img id="image">
        this.img.src = path;
    }

        /**
     * Draws the drawable object on the canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.log('Konnte nicht geladen werden', this.img.src)
        }
    }

        /**
     * Preloads a list of images and stores them in the image cache.
     * @param {string[]} arr - An array of image paths to preload.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}