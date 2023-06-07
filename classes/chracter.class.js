class Character extends MovableObject{
    height= 350;
    y=75;
    speed= 15;
    walkAnimation =  [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
]
world;
    
    constructor(){
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.walkAnimation);
        this.animate();
    }

    animate(){

        setInterval(()=>{
            if(this.world.keyboard.RIGHT && this.x< this.world.level.level_end_x){
            this.x += this.speed
            this.otherDirection = false;
        }
        if(this.world.keyboard.LEFT && this.x>0){
            this.x -= this.speed
            this.otherDirection = true;
        }
        this.world.camera_x = -this.x+100;
        },1000/60)

        setInterval(()=>{
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
            let i = this.currentImage % this.walkAnimation.length; 
            let path = this.walkAnimation[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            }
        },50)

    }

    jump(){
    }
}