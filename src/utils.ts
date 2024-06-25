export const getRandomInt = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

export const randomize = () => +Math.random().toFixed(2);

export const drawAxis = (ctx: CanvasRenderingContext2D) => {
  const cX = ctx.canvas.width / 2;
  const cY = ctx.canvas.height / 2;
  ctx.setLineDash([4, 16]);

  ctx.beginPath();
  ctx.moveTo(cX, 0);
  ctx.lineTo(cX, ctx.canvas.height);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, cY);
  ctx.lineTo(ctx.canvas.width, cY);
  ctx.stroke();

  ctx.setLineDash([0, 0]);
};
