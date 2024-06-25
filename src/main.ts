import './style.css';
import { initCanvas } from './canvas.ts';

document.querySelector<HTMLDivElement>('#app')!.appendChild(initCanvas()!);
