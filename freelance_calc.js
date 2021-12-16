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
 function dayRate(ratePerHour) {
    return (ratePerHour*8);
  }
  
  /**
   * Calculates the number of days in a budget, rounded down
   *
   * @param {number} budget: the total budget
   * @param {number} ratePerHour: the rate per hour
   * @returns {number} the number of days
   */
  function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour));
  }

  /**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
  
  function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
	const dayRate = (ratePerHour*8);
    const numOfMonths = Math.floor(numDays/22);
    const remainderOfDays = Math.floor(numDays%22);
    const discountedPartPrice = ( (dayRate * 22 * numOfMonths) * (1 - discount) );
    const partPrice = (remainderOfDays*dayRate);
    return Math.ceil(discountedPartPrice + partPrice);
}