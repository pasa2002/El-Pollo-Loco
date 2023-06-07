class BackgroundObject extends MovableObject{
    width = 720;
    height = 480;

    constructor(imgPath,x,y){
        super().loadImage(imgPath);
        this.x = x;
        this.y=480-this.height;
    }
}