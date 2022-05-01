import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../assets/bR.png';
import whiteLogo from '../../assets/wR.png';

export class Rook extends Figure {
  private xPath: Cell[] = [];
  private yPath: Cell[] = [];

  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    if (this.cell.x === target.x) {
      this.xPath.push(target);
    }

    console.log(this.xPath);

    return true;
  }
}