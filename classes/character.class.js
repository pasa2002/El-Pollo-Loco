class Character extends MovableObject {
    /**
     * Represents a character in the game.
     */
    world;
    speed = 7.5;
    y = 75;
    backgroundSound = false;

    offset = {
        top: 120,
        bottom: 10,
        left: 40,
        right: 30,
    }

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ]

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ]

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ]

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ]

    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ]

    IMAGES_LONGIDLE = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png',

    ]

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_LONGIDLE)
        this.animate();
        this.applyGravity();
        this.startSleepCheckInterval();
        this.hasHitChicken = false;
        this.nearestChickenIndex = -1;
    }

    setHitChickenStatus(hasHit){
        this.hasHitChicken = hasHit;
    }
    setNearestChickenIndex(index) {
        this.nearestChickenIndex = index;
    }

    /**
     * Starts the interval to check if the character is idle for a certain duration.
     */
    startSleepCheckInterval() {
        let timeSinceLastMovement = 0;
        let longIdleIndex = 0;
    
                /**
         * Interval to check if the character is idle.
         * @type {number}
         */
        const sleepCheckInterval = setInterval(() => {
            if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.world.keyboard.SPACE) {
                timeSinceLastMovement += 100; 
            } else {
                timeSinceLastMovement = 0;
            }
    
            if (timeSinceLastMovement >= 5000) {
                this.playLongIdleAnimation(longIdleIndex);
                longIdleIndex = (longIdleIndex + 1) % this.IMAGES_LONGIDLE.length;
                this.playSnoringSound();
            }else{
                audio_snoring.pause();
            }
        }, 100); // Check every 100ms
    
        intervalIDs.push(sleepCheckInterval);
    }
    
    playLongIdleAnimation(index) {
        this.playAnimation([this.IMAGES_LONGIDLE[index]]);
    }
    

    /**
     * Animates the character's behavior.
     */
    animate() {
        this.startCharacterReactionInterval();
        this.startCharacterAnimationInterval();
    }
        /**
     * Starts the interval to handle character reactions (movement, jump, camera).
     */
    startCharacterReactionInterval() {
        const characterReactionInterval = setInterval(() => {
            this.handleCharacterMovement();
            this.handleJump();
            this.updateCameraPosition();
        }, 1000 / 40);
    
        intervalIDs.push(characterReactionInterval);
    }
    /**
     * Starts the interval to update character animations based on actions.
     */
    startCharacterAnimationInterval() {
        const characterAnimationInterval = setInterval(() => {
            this.updateCharacterAnimation();
        }, 100);
    
        intervalIDs.push(characterAnimationInterval);
    }
        /**
     * Handles character movement based on keyboard input.
     */
    handleCharacterMovement() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
            this.playWalkingSound();
        } else if (this.world.keyboard.LEFT && this.x > -600) {
            this.moveLeft();
            this.otherDirection = true;
            this.playWalkingSound();
        } else {
            walking_sound.pause();
        }
    }
        /**
     * Handles character jumping based on keyboard input.
     */
    handleJump() {
        if (this.world.keyboard.SPACE && !this.isInAir()) {
            this.jump();
            this.playJumpingSound();
        }
    }
        /**
     * Updates the camera position based on character movement.
     */
    updateCameraPosition() {
        this.world.camera_x = -this.x + 80;
    }
        /**
     * Updates the character's animation based on its state and actions.
     */
    updateCharacterAnimation() {
        if (this.isDead()) {
            this.handleDeadAnimation();
        } else if (this.isHurt()) {
            this.handleHurtAnimation();
        } else if (this.isInAir()) {
            this.playAnimation(this.IMAGES_JUMPING);
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }
        /**
     * Handles the animation when the character is dead.
     */
    handleDeadAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        this.handleDeadSound();
        this.handleGameEnd();
    }
        /**
     * Handles the animation when the character is gurt.
     */
    handleHurtAnimation() {
        this.playAnimation(this.IMAGES_HURT);
        this.playHurtSound();
    }
        /**
     * Plays the hurt sound if not muted.
     */
    playWalkingSound() {
        if (!mutedSound) {
            walking_sound.play();
        }
    }
            /**
     * Plays the jump sound if not muted.
     */
    playJumpingSound() {
        if (!mutedSound) {
            jumping_sound.play();
        }
    }
            /**
     * Plays the dead sound if not muted.
     */
    handleDeadSound() {
        if (!mutedSound) {
            audio_lose.play();
        }
    }
        /**
     * Plays the snoring sound if not muted.
     */
    playSnoringSound(){
        if(!mutedSound){
            audio_snoring.play();
        }
    }
    
    handleGameEnd() {
        if (this.backgroundSound) {
            audio_background.pause();
            audio_bossAttack.pause();
        }
        this.backgroundSound = true;
        stopGame();
        setTimeout(() => {
            endscreen();
        }, 500);
    }
            /**
     * Plays the hurt sound if not muted.
     */
    playHurtSound() {
        if (!mutedSound) {
            audio_hurt.play();
        }
    }
    
}