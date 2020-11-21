class FlappyBird {

  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.jumpImpulse = 70;
    this.vy = 3;

    this.sprite = new Image();
    this.sprite.src = 'assets/img/bird.png';
    this.sprite.isReady = false;
    this.sprite.horizontalFrames = 3;
    this.sprite.verticalFrames = 1;
    this.sprite.horizontalFrameIndex = 0;
    this.sprite.verticalFrameIndex = 0;
   
    this.sprite.onload = () => {
    this.sprite.isReady = true;
    this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames);
    
    //this.width = this.sprite.frameWidth;
    //this.height = this.sprite.height;  
  }

    

    this.drawCount = 0;
    this.movements = {
      up: false
    }
  }

  onKeyEvent(event) {
    // iteration 2: configure frame animation
  }

  draw() {
    if (this.sprite.isReady) {
      // draw sprite
      this.drawCount++;
      // animate sprite
    }
  }

  animate() {
    // iteration 2: configure frame animation
    this.animateFrame();
  }

  animateFrame(initVerticalFrame, initHorizontalFrame, segments, frequency) {
    // iteration 2: animate the sprite
  }

  move() {
    // iteration 2: move the y
  }

  collides(element) {
    // iteration 3: check collisions (true|false)
  }

}
