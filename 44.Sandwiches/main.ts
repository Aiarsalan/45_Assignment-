

function makeSandwich (item : string []){
    console.log('\nMaking your sandwich with:');

    item.forEach(element => console.log("- " + element ));
    console.log('\nEnjoy your sandwich !');

}

makeSandwich(['Egg', 'Bread', 'Chicken'])
makeSandwich(['Mayo', 'cucumber'])
makeSandwich(['Cheese','Sauce'])
