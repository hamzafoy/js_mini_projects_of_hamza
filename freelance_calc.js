/*
The following is a series of functions developed alongside
Exercism's curriculum. The curriculum utilizes JSDoc comment
blocks to give instructions.
*/

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
 export function dayRate(ratePerHour) {
    return (ratePerHour*8);
  }
  
  /**
   * Calculates the number of days in a budget, rounded down
   *
   * @param {number} budget: the total budget
   * @param {number} ratePerHour: the rate per hour
   * @returns {number} the number of days
   */
  export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour));
  }
  