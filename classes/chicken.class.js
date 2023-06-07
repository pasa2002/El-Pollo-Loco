class Chicken extends MovableObject{
    width= 100;
    height=100;
    walkChickens = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.walkChickens);
        this.animate();
        this.x = 200 + (Math.random()*500);
        this.speed = 0.15+ Math.random()*0.25
        this.y = 320;
    }
    animate(){
        this.moveLeft();
        setInterval(()=>{
            let i = this.currentImage % this.walkChickens.length; 
            let path = this.walkChickens[i];
            console.log(path)
            this.img = this.imageCache[path];
            this.currentImage++;
        },100
        )
}
}