import { getRandomInt } from './utils.ts';

export const pallete = [
  '#001219',
  '#005F73',
  '#0A9396',
  '#94D2BD',
  '#E9D8A6',
  '#EE9B00',
  '#CA6702',
  '#BB3E03',
  '#AE2012',
  '#9B2226',
];

export const getColors = (n: number) => {
  let localPallete = [...pallete];

  return Array.from({ length: n }, () => {
    const color = localPallete[getRandomInt(0, localPallete.length)];
    localPallete = localPallete.filter((c) => c !== color);

    return color;
  });
};

export const addStopsToGradient = (gradient: CanvasGradient) => {
  const colors = getColors(getRandomInt(2, 5));
  // TODO add random step sizes
  const step = 1 / (colors.length - 1);
  colors.forEach((c, ind) => {
    gradient.addColorStop(ind * step, c);
  });

  return gradient;
};
