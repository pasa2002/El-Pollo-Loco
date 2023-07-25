class Bottle extends MovableObject{
    width=200;
    height=200;

    IMAGE_BOTTLES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]

    constructor(){
        super().loadImage(this.IMAGE_BOTTLES[0]);
        this.loadImages(this.IMAGE_BOTTLES);
        this.x = 800 + (Math.random()*500);
        this.y = 50+(Math.random()*500);
    }
}