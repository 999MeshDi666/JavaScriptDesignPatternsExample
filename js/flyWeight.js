class Sandwich {
    constructor(title,subtitle,desc,price,availability,src) {
        this.title = title;
        this.subtitle = subtitle;
        this.desc = desc;
        this.price = price;
        this.availability = availability;
        this.src = src;
    }
}
  
// const sandwichList = [];
const addSandwich = (title,subtitle,desc,price,availability,src) => {
    const sandwich = {
      ...createSandwich(title,subtitle,desc,price,availability,src),
    };
   
    // sandwichList.push(sandwich)
    return sandwich;
};
// const removeSandwich = (key) =>{
//   sandwiches.delete(key)
//   localStorage.setItem('list', JSON.stringify([...sandwiches]))
// }
// const sandwichAvailability = (key, isAvailable) =>{
//   sandwiches.get(key).availability = isAvailable;
//   localStorage.setItem('list', JSON.stringify([...sandwiches]))

// }
const sandwiches = new Map();

const createSandwich = (title,subtitle,desc,price,availability,src) => {
  const existingSandwich = sandwiches.has(title);
  
  if (existingSandwich) {
    return sandwiches.get(title);
  }
  
  const sandwich = new Sandwich(title,subtitle,desc,price,availability,src);
  sandwiches.set(title, sandwich);
  // localStorage.setItem('list', JSON.stringify([...sandwiches]))
  return sandwich;
};

addSandwich("Club", "Standard", "Lorem Ipsum", "6.50", true, "../image/sandwich1.png");
addSandwich("Classic", "Standard", "Lorem Ipsum", "4.00", true, "../image/sandwich6.png");
addSandwich("Vegan", "Standard", "Lorem Ipsum", "5.50", true, "../image/sandwich7.png");
addSandwich("Egg",  "Standard", "Lorem Ipsum", "8.00", true, "../image/sandwich8.png");

export {addSandwich, sandwiches};