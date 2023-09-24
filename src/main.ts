import './style.css'
import Boundary from './Boundary';

const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const map = [
  ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', '-', '-', ' ', '-', '-', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', '-', '-', ' ', '-', '-', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
]

const boundaries: Boundary[] = []



function main() {
  if (!ctx) return;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      switch (map[i][j]) {
        case "-":
          boundaries.push(
            new Boundary(ctx, {
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i
              }
            })
          )
          break;
      }
    }
  }

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].draw();
  }
}

main();

