import Stage from "./biblioteca/Stage.js";

let stage = new Stage(0, 0, 512, 256, "#cdcdcd");
stage.ctx.fillStyle = "#ff4500";
stage.ctx.rect(100, 100, 64, 64);
stage.ctx.fill();
