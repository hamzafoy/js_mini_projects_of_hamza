/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
function frontDoorResponse(line) {
    const chars = line.split('');
    return chars[0];
  }
  
  /**
   * Format the password for the front-door, given the response
   * letters.
   *
   * @param {string} word the letters you responded with before
   * @returns {string} the front door password
   */
 function frontDoorPassword(word) {
    let lowercasingWord = word.toLowerCase();
    const chars = lowercasingWord.split('');
    const firstLetter = chars[0].toUpperCase();
    chars.splice(0, 1, firstLetter);
    let newWord = chars.join('');
    return newWord;
  }