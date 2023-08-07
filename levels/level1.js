let level1;

function initLevel() {

    const storedMutedState = localStorage.getItem('mutedSound');
    if (storedMutedState === 'true') {
        muteSound();
    } else {
        playSound();
    }
    level1 = new Level([
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken()
        ],

        [
            new LittleChicken(),
            new LittleChicken(),
            new LittleChicken(),
            new LittleChicken(),
            new LittleChicken(),
        ],

        [
            new Endboss()
        ], [
            new Cloud('img/5_background/layers/4_clouds/1.png'),
            new Cloud('img/5_background/layers/4_clouds/2.png'),
            new Cloud('img/5_background/layers/4_clouds/1.png'),
            new Cloud('img/5_background/layers/4_clouds/2.png'),
            new Cloud('img/5_background/layers/4_clouds/1.png'),
            new Cloud('img/5_background/layers/4_clouds/2.png'),
            new Cloud('img/5_background/layers/4_clouds/1.png'),
            new Cloud('img/5_background/layers/4_clouds/2.png'),
            new Cloud('img/5_background/layers/4_clouds/1.png'),
            new Cloud('img/5_background/layers/4_clouds/2.png'),
            new Cloud('img/5_background/layers/4_clouds/1.png'),
            new Cloud('img/5_background/layers/4_clouds/2.png'),
            new Cloud('img/5_background/layers/4_clouds/1.png'),
            new Cloud('img/5_background/layers/4_clouds/2.png'),
            new Cloud('img/5_background/layers/4_clouds/1.png'),
            new Cloud('img/5_background/layers/4_clouds/2.png'),
            new Cloud('img/5_background/layers/4_clouds/1.png'),
            new Cloud('img/5_background/layers/4_clouds/2.png'),
            new Cloud('img/5_background/layers/4_clouds/1.png'),
            new Cloud('img/5_background/layers/4_clouds/2.png'),
        ], [
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 7)
        ], [
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 250),
            new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1450),
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 2700),
            new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 3400),
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 4000)

        ], [
            new FlyingBottle('img/6_salsa_bottle/salsa_bottle.png', 550),
            new FlyingBottle('img/6_salsa_bottle/salsa_bottle.png', 1250),
            new FlyingBottle('img/6_salsa_bottle/salsa_bottle.png', 2200),
            new FlyingBottle('img/6_salsa_bottle/salsa_bottle.png', 1650),
            new FlyingBottle('img/6_salsa_bottle/salsa_bottle.png', 3000)
        ], [
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
        ]
    );
}