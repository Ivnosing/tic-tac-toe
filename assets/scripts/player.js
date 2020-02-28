/**
 * Player function factory
 */
const Player = function() {
  let name = '';
  
  /**
   * Sets the name of the player
   *
   * @param {string} newName New name of the player
   */
  const setName = (newName) => name = newName;
  
  /**
   * Gets the name of the player
   *
   * @returns {string} Current name of the player
   */
  const getName = () => name;

  return {
    setName,
    getName
  }
}

/**
 * Player function factory
 * 
 * @returns { { setName: (newName: string) => void, getName: () => string } } Player object
 */
export const playerFactory = () => Object.create(Player());
