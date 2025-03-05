class Stage {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    // crear canvas
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.background = this.color;
    document.body.appendChild(this.canvas);
    document.body.style.margin = 0;
  }
}

export default Stage;
