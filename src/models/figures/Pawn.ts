import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../assets/bP.png';
import whiteLogo from '../../assets/wP.png';

enum Direction {
  "UP" = -1,
  "DOWN" = 1
}

export class Pawn extends Figure {
  private firstMove = true;
  private readonly direction;
  private readonly step = 1;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
    this.direction = color === Colors.BLACK ? Direction.DOWN : Direction.UP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    if (target.figure && target.figure.color === this.color) {
      return false;
    }

    if (
      (this.cell.x + this.step === target.x || this.cell.x - this.step === target.x) &&
      this.cell.y + this.direction === target.y &&
      target.figure &&
      target.figure.color !== this.color
    ) {
      return true;
    }

    if (this.cell.x !== target.x) {
      return false;
    }

    if (this.cell.x === target.x && target.figure) {
      return false;
    }

    const step = this.firstMove ? 2 * this.step : this.step;

    if (this.direction === Direction.UP && target.y < this.cell.y && this.cell.y + step * this.direction <= target.y) {
      return true;
    }

    if (this.direction === Direction.DOWN && target.y > this.cell.y && this.cell.y + step * this.direction >= target.y) {
      return true;
    }

    return false;
  }

  moveFigure(target: Cell) {
    super.moveFigure(target);
    this.firstMove = false;
  }
}