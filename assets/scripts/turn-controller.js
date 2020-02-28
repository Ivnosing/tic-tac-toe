export const TurnController = (function () {
  let playerTurn = 1;

  const symbols = new Map([
    [1, 'x'],
    [2, 'o']
  ]);

  const getPlayerTurn = () => {
    return playerTurn;
  }
  
  const getPlayerSymbol = () => {
    return symbols.get(playerTurn);
  }
  
  const nextTurn = () => {
    if (playerTurn === symbols.size) {
      return playerTurn = 1;
    }

    return ++playerTurn;
  }

  return {
    getPlayerTurn,
    getPlayerSymbol,
    nextTurn
  }
})();