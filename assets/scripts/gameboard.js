export const Gameboard = (function () {
  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  const size = board[0].length;

  /**
   * Gets all cell symbols
   *
   * @returns {string[]} Array of cell symbols
   */
  const getCells = () => {
    return board.reduce((acc, val) => [...acc, ...val], []);
  }

  /**
   * Sets the symbol of a cell
   * @param {number} index One-dimensional cell index
   * @param {string} symbol Cell symbol
   * @returns {boolean} Returns true if the cell was set and false otherwise
   */
  const setCell = (index, symbol) => {
    // Gets the row
    const i = Math.trunc(index / size);

    // Gets the column
    const j = index % size;

    if (!board[i][j]) {
      board[i][j] = symbol;
      return true;
    }

    return false;
  }

  /**
   * Resets all cell symbols
   */
  const resetBoard = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        board[i][j] = '';
      }
    }
  }

  const evaluateBoard = () => {
    const rows = board;
    const columns = board.map((column, index) => board.map(row => row[index]));
    const diagonals = [
      board.map((row, index) => row[index]),
      board.map((row, index) => row[size - 1 - index])
    ];

    const patterns = [...rows, ...columns, ...diagonals];

    return patterns.some((pattern) => {
      const unique = [...new Set(pattern)];

      return unique.length === 1 && unique[0];
    });
  }

  const tie = () => {
    const cells = getCells();
    return cells.length === cells.filter(c => c).length;
  }

  return {
    getCells,
    setCell,
    resetBoard,
    evaluateBoard,
    tie
  };
})();
