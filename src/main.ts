import './style.css'

const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;

const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function main() {
  if (!ctx) return;
  ctx.fillStyle = 'orange'
  ctx.fillRect(0, 0, 50, 50);
}

main();

