function makeSandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(function (element) { return console.log("- " + element); });
    console.log('\nEnjoy your sandwich !');
}
makeSandwich(['Egg', 'Bread', 'Chicken']);
makeSandwich(['Mayo', 'cucumber']);
makeSandwich(['Cheese', 'Sauce']);
