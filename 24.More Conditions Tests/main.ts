
let mango = "fruit";
console.log("mango is equal to fruit");
console.log(mango == "fruit");
console.log("mango is not equal to fruit");
console.log(mango !== "fruit");
let uppercasepakistan = "PAKISTAN";
console.log("PAKISTAN is equal to pakistan after converting lowercase");
console.log(uppercasepakistan.toLocaleLowerCase() == "pakistan");
console.log("PAKISTAN is not equal to pakistan after converting lowercase");
console.log(uppercasepakistan.toLocaleLowerCase() !== "pakistan");
let five = 5;
let ten = 10;
console.log("five is equal to 10");
console.log(five == 10);
console.log("five is not equal to 10");
console.log(five !== 10);
console.log("10 is greaterthen 5");
console.log(ten > 5);
console.log("10 is lessthan 5");
console.log(ten < 5);
console.log("ten is greaterthan or equal to 5");
console.log(ten >= 5);
console.log("ten is lessthan or equal to 5");
console.log(ten <= 5);
console.log("ten is not equal to five and 10 is greaterthan 5");
console.log(ten !== 5 && 10 > 5);
console.log("ten is not equal to five and 5 is greaterthan 10");
console.log(ten !== 5 && 5 > 10);
console.log("ten is greaterthan five or  10 is lessthan 5");
console.log(ten > 5 ||10 < 5);
console.log("5 is greaterthan 10 or  10 is lessthan 5");
console.log(5 > 10 ||10 < 5);


let vegitables = ["potato", "Onion", "garlic"];
console.log('Onion is include in my Vegitable array');
console.log(vegitables.includes("Onion"));


console.log('Onion is not include in my Vegitable array');
console.log(!vegitables.includes("Onion"));