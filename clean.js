var dirty_clothes = [
  "*blue shirt",
  "argyle s*ocks",
  "u*gly sweater",
  "brown plaid pa*nts",
  "paisl*ey dress shirt"
];

/* YOUR CODE HERE */
function clean(clothing_item){
  let clean_clothing_item = clothing_item.replace("*", "");
  return clean_clothing_item;
};

clean("*blue shirt");

/* PRINT RESULT */
console.log("--> Finished running clean.js");
