class Background {

  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.footerY = 400;
    this.img = new Image();
      this.img.src = './images/gb.png'
      this.img.isReady = false;
    
    
    // positions

    this.bgImg = new Image();
    this.bgImg.src = 'assets/img/game-bg.png';
    // load and set ready
      this.bgImg.onload = () => {
        this.bgImg.isReady = true;
          this.bgImg.width = this.ctx.canvas.width;
          this.bgImg.height = this.ctx.canvas.height;
      }

    this.footerImg = new Image();
    this.footerImg.src = 'assets/img/game-bg-footer.png';
    // load and set ready
    this.footerImg.onload = () => {
      this.footerImg.isReady = true;
      this.footerImg.width = this.ctx.canvas.width;
      this.footerImg.height = this.ctx.footerY;
  }
}

  draw() {
    if (this.bgImg.isReady && this.footerImg.isReady) {
      // draw both images
        this.ctx.drawImage (
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,
        )
    }
  }

  move() {
    // move the ground

    // check bounds
  }
}