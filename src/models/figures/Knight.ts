import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../assets/bN.png';
import whiteLogo from '../../assets/wN.png';

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }
}