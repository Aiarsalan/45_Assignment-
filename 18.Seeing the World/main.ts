let PlaceToVisit : String[] = [ "Turkey", "Paris", "USA", "Mecca", "Madina"  ];
console.log("Original order:", PlaceToVisit);

console.log("Alphabetical order:", PlaceToVisit.slice().sort());


console.log("Original order after sorting:", PlaceToVisit);

console.log("Reverse Alphabetical order:", PlaceToVisit.slice().sort().reverse());

console.log("Original order After Reverse :", PlaceToVisit);

PlaceToVisit.reverse();

console.log("Reverse original order:",   PlaceToVisit);

PlaceToVisit.reverse();
console.log("Reverse back original order:",   PlaceToVisit);

console.log("Sorting Alphabetical order:", PlaceToVisit.slice().sort());

console.log("Stored in Reverse Alphabetical order:", PlaceToVisit.slice().sort().reverse());



