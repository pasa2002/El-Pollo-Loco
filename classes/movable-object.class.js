class MovableObject{
    x=140;
    y=250;
    image;
    height=150;
    width=100;
    imageCache = [];
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

    loadImage(path){
        this.img = new Image(); // <img> in JS
        this.img.src = path;
    }
    
    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveLeft(){
        setInterval(()=>{
            this.x -= this.speed;
        },1000/60)
    }

    moveRight(){
        setInterval(()=>{
            this.x += this.speed;
        },1000/60)
    }


}