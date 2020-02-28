/**
 *  Sets the announcement text
 *
 * @param {string} name Current player name
 * @param {(name: string) => string} [message] Function that takes current player's name as param to display an alternative message
 */
export const setAnnouncement = (name, message) => {
  const announcement = document.getElementById('announcement');

  announcement.innerText = message ? message(name) : `${name} plays now`;
}