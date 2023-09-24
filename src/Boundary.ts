export default class Boundary {
  public static width = 40;
  public static height = 40;
  protected ctx: CanvasRenderingContext2D;
  public position: Position;
  public height: number;
  public width: number;
  constructor(ctx: CanvasRenderingContext2D, { position }: { position: Position }) {
    this.ctx = ctx;
    this.position = position;
    this.height = 40;
    this.width = 40;
  }
  draw() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}
