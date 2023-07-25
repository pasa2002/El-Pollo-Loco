class Coin extends MovableObject{
    width=200;
    height=200;

    IMAGE_COINS= [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ]

    constructor(){
        super().loadImage(this.IMAGE_COINS[0]);
        this.loadImages(this.IMAGE_COINS);
        this.x = 200 + (Math.random()*500);
        this.y = -100+(Math.random()*500);
    }
}