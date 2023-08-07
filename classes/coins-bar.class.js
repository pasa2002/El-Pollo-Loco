class Coinbar extends DrawableObject {
        /**
     * Represents a coin bar object in the game.
     * @constructor
     */
    number_of_coins = 0;

        /**
         * The array of image paths for the coin bar.
         * @type {string[]}
         */
    NUMBER_COINS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ];

    percent_coin = 0;

    constructor() {
        super();
        this.loadImages(this.NUMBER_COINS);
        this.x = 8;
        this.y = 70;
        this.width = 120;
        this.height = 30;
        this.setPercentCoins(0);
    }

        /**
     * Sets the current percentage of coins.
     * @param {number} percent_coin - The percentage of coins.
     */
    setPercentCoins(percent_coin) {
        this.percent_coin = percent_coin;
        let path = this.NUMBER_COINS[this.coinIndex()];
        this.img = this.imageCache[path];
    }

        /**
     * Calculates the index of the coin bar image based on the percentage of coins.
     * @returns {number} - The index of the coin bar image.
     */
    coinIndex() {
        if (this.percent_coin >= 5) {
            return 5;
        } else if (this.percent_coin >= 4) {
            return 4;
        } else if (this.percent_coin >= 3) {
            return 3;
        } else if (this.percent_coin >= 2) {
            return 2;
        } else if (this.percent_coin >= 1) {
            return 1;
        } else {
            return 0;
        }
    }
    }
