export default class WinChecker {
  constructor() {
    this.FIELD_SIZE = 3;
  }

  checkWinner(fieldData, value) {
    return (
      this._checkWinnerHorizontal(fieldData, value) ||
      this._checkWinnerVertical(fieldData, value) ||
      this._checkWinnerDiagonal(fieldData, value)
    );
  }

  _checkWinnerHorizontal(fieldData, symbol) {
    for (let i = 0; i < fieldData.length; i += this.FIELD_SIZE) {
      let rowMatch = false;

      for (let j = i; j < i + this.FIELD_SIZE; j++) {
        rowMatch = fieldData[j] === symbol;

        if (!rowMatch) {
          break;
        }
      }

      if (rowMatch) {
        return rowMatch;
      }
    }

    return false;
  }

  _checkWinnerVertical(fieldData, symbol) {
    for (let i = 0; i < this.FIELD_SIZE; i++) {
      let columnMatch = false;

      for (let j = 0; j < this.FIELD_SIZE; j++) {
        columnMatch = fieldData[i + this.FIELD_SIZE * j] === symbol;

        if (!columnMatch) {
          break;
        }
      }

      if (columnMatch) {
        return columnMatch;
      }
    }

    return false;
  }

  _checkWinnerDiagonal(fieldData, symbol) {
    for (let i = 0; i < this.FIELD_SIZE; i += this.FIELD_SIZE - 1) {
      let diagonalMatch = false;

      for (
        let j = i;
        j < fieldData.length - i + 1;
        j += this.FIELD_SIZE + (i ? -1 : 1)
      ) {
        diagonalMatch = fieldData[j] === symbol;

        if (!diagonalMatch) {
          break;
        }
      }
      if (diagonalMatch) {
        return diagonalMatch;
      }
    }

    return false;
  }
}
