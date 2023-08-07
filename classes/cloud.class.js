class Cloud extends MovableObject {
        /**
     * Represents a cloud object in the game.
     * @constructor
     */
    y = 30;
    height = 300;
    width = 600;


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png')
        this.x = 50 + Math.random() * 6000; 
        this.animate();
    }
    /**
     * Animates the cloud's movement.
     */
    animate() {
        let cloudInterval = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        intervalIDs.push(cloudInterval)
    }
}