class Bottlebar extends DrawableObject {
        /**
     * Represents a bottle bar status indicator in the game.
     * @constructor
     */
    width=400;
    height= 100;
            /**
         * The array of image paths for the different bottle fill levels.
         * @type {string[]}
         */
    IMAGES_BOTTLE = [
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];
    percent_bottle = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLE);
                /**
         * The x-coordinate of the bottle bar.
         * @type {number}
         */
        this.x = 10;
                /**
         * The y-coordinate of the bottle bar.
         * @type {number}
         */
        this.y = 40;
                /**
         * The width of the bottle bar.
         * @type {number}
         */
        this.width = 120;
                /**
         * The height of the bottle bar.
         * @type {number}
         */
        this.height = 30;
        this.setPercentBottles(0);
    }

    setPercentBottles(percent_bottle) {
        console.log("Setting percent_bottle to:", percent_bottle);
        this.percent_bottle = percent_bottle;
        let path = this.IMAGES_BOTTLE[this.bottleIndex()];
        console.log("Setting image path:", path);
        this.img = this.imageCache[path];
    }

        /**
     * Determines the index of the bottle image based on the percentage fill.
     * @returns {number} The index of the bottle image.
     */
    bottleIndex() {
        if (this.percent_bottle >= 5) {
            return 5;
        } else if (this.percent_bottle >= 4) {
            return 4;
        } else if (this.percent_bottle >= 3) {
            return 3;
        } else if (this.percent_bottle >= 2) {
            return 2;
        } else if (this.percent_bottle >= 1) {
            return 1;
        } else {
            return 0;
        }
    }  
    }
