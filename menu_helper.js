let menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set mains(mains) {
      this._courses.mains = mains
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers
    },
    set desserts(desserts) {
      this._courses.desserts = desserts
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + mains.price + desserts.price;
      return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}. The price is ${totalPrice}.`
    }
  }
  
  menu.addDishToCourse('appetizers', 'Potato Pakora', 7.99);
  menu.addDishToCourse('mains', 'Shrimp Scampi', 12.99);
  menu.addDishToCourse('desserts', 'Banana Cheesecake', 5.99);
  menu.addDishToCourse('appetizers', 'Spaetzle', 4.99);
  menu.addDishToCourse('mains', 'Spinach Tortellini', 11.99);
  menu.addDishToCourse('desserts', 'Zucchini Bread Loaf', 2.99);
  menu.addDishToCourse('mains', 'Beef Biryani', 15.99);
  
  

  let meal = menu.generateRandomMeal()
  
console.log(meal);