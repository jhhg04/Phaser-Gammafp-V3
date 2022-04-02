const config = {
  width: 320 * 2,
  height: 180 * 2,
  parent: 'container',
  type: Phaser.AUTO,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        // y: 500,
      },
    },
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image('bird', './assets/bird.png');
  // this.load.image('bird', './assets/bird_dos.png');
}
function create() {
  this.bird = this.physics.add.image(100, 50, 'bird');
  // this.input.keyboard.on('keydown-RIGHT', () => {
  //   this.bird.setAcceleration(100, 0);
  // });
  // this.input.keyboard.on('keyup-RIGHT', () => {
  //   this.bird.setAcceleration(0, 0);
  //   this.bird.setVelocity(0);
  // });
  // this.cursor = this.input.keyboard.createCursorKeys();
  // console.log(this.cursor);

  // Personalized keys
  this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
}
function update(time, delta) {
  // Normal keys
  // if (this.cursor.right.isDown) {
  //   this.bird.x++;
  // } else if (this.cursor.left.isDown) {
  //   this.bird.x--;
  // } else if (this.cursor.up.isDown) {
  //   this.bird.y--;
  // } else if (this.cursor.down.isDown) {
  //   this.bird.y++;
  // }
  // Personalized keys
  if (this.right.isDown) {
    this.bird.x++;
  } else if (this.left.isDown) {
    this.bird.x--;
  } else if (this.up.isDown) {
    this.bird.y--;
  } else if (this.down.isDown) {
    this.bird.y++;
  }
}
