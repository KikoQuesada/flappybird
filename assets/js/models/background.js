class Background {

  constructor(ctx) {
    this.ctx = ctx;
    this.vx = SPEED;
    // positions

    this.bgImg = new Image();
    this.bgImg.src = 'assets/img/game-bg.png';
    this.bgImgX = 0;
    this.bgImgY = 0;
    // load and set ready
    this.bgImg.onload = () => {
      this.bgImg.isReady = true;
      this.bgImg.width = this.ctx.canvas.width;
      this.bgImg.height = this.ctx.canvas.height;
    }

    this.footerImg = new Image();
    this.footerImg.src = 'assets/img/game-bg-footer.png';
    this.footerImgX = 0;
    this.footerImgY = 430;
    // load and set ready
    this.footerImg.onload = () => {
      this.footerImg.isReady = true;
      this.footerImg.width = this.ctx.canvas.width;
  }
}

  draw() {
    if (this.bgImg.isReady && this.footerImg.isReady) {
      // draw both images
        this.ctx.drawImage (
            this.bgImg,
            this.bgImgX,
            this.bgImgY,
            this.bgImg.width,
            this.bgImg.height
        )
        
        this.ctx.drawImage (
            this.footerImg,
            this.footerImgX,
            this.footerImgY,
            this.footerImg.width,
            this.footerImg.height
        )  
        
        this.ctx.drawImage (
            this.footerImg,
            this.footerImgX + this.footerImg.width,
            this.footerImgY,
            this.footerImg.width,
            this.footerImg.height
        )

    }
  }
  move() {
    this.footerImgX += this.vx;
    if(this.footerImgX + this.footerImg.width <= 0) {
      this.footerImgX = 0;
    }
    

    // check bounds
  }
}