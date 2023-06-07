class World{
    character = new Character();
    level = level1;
    // enemies = level1.enemies;
    // clouds = level1.clouds;
    // backgroundObjects = level1.backgroundObject;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    constructor(canvas,keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }

    draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        this.ctx.translate(this.camera_x,0);
        this.addObjectToMap(this.level.backgroundObject)
        this.addObjectToMap(this.level.clouds)
        this.addObjectToMap(this.level.enemies)
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x,0);
        
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }

    addObjectToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo){
        if(mo.otherDirection){
            this.flipImage(mo);
        }

        this.ctx.drawImage(mo.img,mo.x,mo.y,mo.width,mo.height);

        if(mo.otherDirection){
            this.flipImageBack(mo)
        }
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1,1);
        mo.x = mo.x*-1;
    }

    flipImageBack(mo){
        mo.x = mo.x*-1;
        this.ctx.restore();
    }

}