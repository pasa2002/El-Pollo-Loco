class Cloud extends MovableObject{ 
    y = -28;
    width = 500;
    height = 300;


    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/full.png')
        this.animate();
        this.x = -100 + (Math.random()*500);
    }
    animate(){
        this.moveLeft();
    }


}