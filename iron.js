var wrinkled_clothes = [
  "grEEn shIrt",
  "TubE sockS",
  "TIe Dye shIrt",
  "gray pants",
  "HAndKerChief",
  "whItE bLousE"
];

/* YOUR CODE HERE */
function iron(clothing_item){
    return clothing_item.toLowerCase();// code in here
};

var clean_clothes = [];

wrinkled_clothes.forEach(function process_item(item){
   clean_clothes.push(iron(item))
  })

console.log(clean_clothes); //=> "green shirt"

//using map method//

function iron(clothing_item){
  return clothing_item.toLowerCase();
}
var ironed_clothing_item = wrinkled_clothes.map(iron);

/* PRINT RESULT */
console.log("--> Finished running iron.js");
console.log(ironed_clothing_item);
