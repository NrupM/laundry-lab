var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
];

/* YOUR CODE HERE */
function mend(clothing_item){
  return clothing_item.replace("/", "");
}

let mended_clothing_items = torn_clothes.map(mend);


/* PRINT RESULT */
console.log("--> Finished running mend.js");
console.log(mended_clothing_items);


//clean function that removes the dirt(*)from a single piece of clothing_item
