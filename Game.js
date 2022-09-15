//This code fulfills all the reqs for "Treasure Hunter" project in Codecademy

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  scene: [StartScene, GameScene, EndScene, ]
};

const game = new Phaser.Game(config);
