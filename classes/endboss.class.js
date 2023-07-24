class Endboss extends MovableObject{
    IMAGES_WALIKING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    y = 50;
    width = 350;
    height = 390;

    constructor(){
        super().loadImage(this.IMAGES_WALIKING[0]);
        this.loadImages(this.IMAGES_WALIKING);
        this.x = 2500;
        this.animate();
    }

    animate(){
        setInterval(() =>{
            this.playAnimation(this.IMAGES_WALIKING);
        },150)
    }

    }


