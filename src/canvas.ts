import { drawLeaf } from './leaf.ts';
import { drawAxis } from './utils.ts';

const draw = (ctx: CanvasRenderingContext2D) => {
  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  drawAxis(ctx);
  drawLeaf(ctx);

  // window.requestAnimationFrame(() => draw(ctx));
};

export const initCanvas = () => {
  const canvas = document.createElement('canvas');

  if (!canvas.getContext) {
    return;
  }

  canvas.width = window.innerWidth - 4;
  canvas.height = window.innerHeight - 4;
  canvas.role = 'presentation';
  canvas.ariaLabel = 'mandala';

  const ctx = canvas.getContext('2d')!;

  canvas.style.width = canvas.width + 'px';
  canvas.style.height = canvas.height + 'px';

  const ratio = window.devicePixelRatio || 1;
  canvas.width = canvas.width * ratio;
  canvas.height = canvas.height * ratio;

  draw(ctx);

  return canvas;
};
