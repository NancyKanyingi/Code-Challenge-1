const prompt = require("prompt-sync")();
let numOfCups = prompt(Number("Karibu! How many cups of Chai Bora would you like to make?"))


let _water = 200 * numOfCups
let _milk = 50 * numOfCups
let _teaLeaves = 1 * numOfCups
let _sugar = 2 * numOfCups
console.log(`To make 3 cups of Kenyan Chai, you will need: 
    Water: ${_water} ml 
    Milk: ${_milk} ml 
    Tea Leaves (Majani): ${_teaLeaves} tablespoons 
    Sugar (Sukari): ${_sugar} teaspoons 
    
    Enjoy your Chai Bora!`)


