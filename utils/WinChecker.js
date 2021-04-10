export default class WinChecker {
  constructor() {
    this.FIELD_SIZE = 3;
  }

  checkWinner(fieldData, value) {
    return (
      this._checkWinnerHorizontal(fieldData, value) ||
      this._checkWinnerVertical(fieldData, value) ||
      this._checkWinnerDiagonal(fieldData, value) ||
      this._checkForDraw(fieldData)
    );
  }

  _checkWinnerHorizontal(fieldData, symbol) {
    for (let i = 0; i < fieldData.length; i += this.FIELD_SIZE) {
      let result = symbol;

      for (let j = i; j < i + this.FIELD_SIZE; j++) {
        result = fieldData[j] === symbol ? symbol : false;

        if (!result) {
          break;
        }
      }

      if (result) {
        return result;
      }
    }

    return false;
  }

  _checkWinnerVertical(fieldData, symbol) {
    for (let i = 0; i < this.FIELD_SIZE; i++) {
      let result = symbol;

      for (let j = 0; j < this.FIELD_SIZE; j++) {
        result = fieldData[i + this.FIELD_SIZE * j] === symbol ? symbol : false;

        if (!result) {
          break;
        }
      }

      if (result) {
        return result;
      }
    }

    return false;
  }

  _checkWinnerDiagonal(fieldData, symbol) {
    for (let i = 0; i < this.FIELD_SIZE; i += this.FIELD_SIZE - 1) {
      let result = symbol;

      for (
        let j = i;
        j < fieldData.length - i + 1;
        j += this.FIELD_SIZE + (i ? -1 : 1)
      ) {
        result = fieldData[j] === symbol ? symbol : undefined;

        if (!result) {
          break;
        }
      }
      if (result) {
        return result;
      }
    }

    return false;
  }

  _checkForDraw(fieldData) {
    const result = "draw";

    for (let i = 0; i < this.FIELD_SIZE ** 2; i++) {
      if (!fieldData[i]) return;
    }

    return result;
  }
}
