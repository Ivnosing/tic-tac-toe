import { Gameboard } from './gameboard.js';
import { playerFactory } from './player.js';
import { DisplayController } from './display-controller.js';
import { TurnController } from './turn-controller.js';
import { setAnnouncement } from './announcement.js';

export const initTicTacToe = () => {
  // Update name of player 1
  document.getElementById('player1').addEventListener('keyup', event => {
    player1.setName(event.target.value);
    announce();
  });

  // Update name of player 2
  document.getElementById('player2').addEventListener('keyup', event => {
    player2.setName(event.target.value);
    announce();
  });

  // Set board
  DisplayController.setBoard(Gameboard.getCells());

  // Set players
  const player1 = playerFactory();
  const player2 = playerFactory();

  // Announce turn
  const announce = (message) => {
    const currentPlayer = TurnController.getPlayerTurn() === 1 ? player1 : player2;
    const name = currentPlayer.getName() || `Player ${TurnController.getPlayerTurn()}`;
    setAnnouncement(name, message);
  }

  // Add event listener to every cell
  for (let i = 0; i < DisplayController.cells.length; i++) {
    DisplayController.cells[i].addEventListener('click', function () {
      // Reset board if game is over and user clicks to start again
      if (Gameboard.evaluateBoard() || Gameboard.tie()) {
        Gameboard.resetBoard();
        DisplayController.setBoard(Gameboard.getCells());
      }
      
      // Update cell
      const cellChanged = Gameboard.setCell(i, TurnController.getPlayerSymbol());

      if (cellChanged) {
        // Update board with new cell
        DisplayController.setBoard(Gameboard.getCells());

        // If user won
        if (Gameboard.evaluateBoard()) {
          announce((name) => `${name} wins! Click a cell to start a new game`);
        } else if (Gameboard.tie()) {
          announce(() => 'Tie! Click a cell to start a new game');
        } else {
          TurnController.nextTurn();
          announce();
        }
      }
    });
  }
}