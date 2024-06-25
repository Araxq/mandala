import { randomize } from './utils.ts';
import { addStopsToGradient } from './pallete.ts';

type LeafConfig = {
  centerX: number;
  centerY: number;
  xStart: number;
  yStart: number;
};

const drawLeafShape = (
  ctx: CanvasRenderingContext2D,
  { centerX, centerY, xStart, yStart }: LeafConfig,
) => {
  const cpX = randomize();
  const cpY = randomize();

  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY * yStart);

  [
    [xStart, 1, cpX, cpY],
    [1, 2 - yStart, cpX, 2 - cpY],
    [2 - xStart, 1, 2 - cpX, 2 - cpY],
    [1, yStart, 2 - cpX, cpY],
  ].forEach(([xStart, yStart, cpX, cpY]) => {
    ctx.quadraticCurveTo(
      centerX * cpX,
      centerY * cpY,
      centerX * xStart,
      centerY * yStart,
    );
  });
};

const colorLeaf = (
  ctx: CanvasRenderingContext2D,
  { centerX, centerY, xStart, yStart }: LeafConfig,
) => {
  const mandalaHeight = centerX * (1 - xStart);
  const mandalaWidth = centerY * (1 - yStart);

  const gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    Math.max(mandalaHeight, mandalaWidth),
  );

  ctx.fillStyle = addStopsToGradient(gradient);
  ctx.fill();
};

export const drawLeaf = (ctx: CanvasRenderingContext2D) => {
  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;

  const xStart = randomize();
  const yStart = randomize();

  drawLeafShape(ctx, { centerX, centerY, xStart, yStart });
  colorLeaf(ctx, { centerX, centerY, xStart, yStart });
};
