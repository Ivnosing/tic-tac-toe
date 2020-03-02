export const TurnController = (function () {
  let playerTurn = 1;

  const symbols = new Map([
    [1, '❌'],
    [2, '⭕']
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

  const resetTurns = () => {
    playerTurn = 1;
  }

  return {
    getPlayerTurn,
    getPlayerSymbol,
    nextTurn,
    resetTurns
  }
})();