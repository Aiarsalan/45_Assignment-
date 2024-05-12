var Magician = ['Shin', 'Roger', 'David', 'Paul', 'Harry'];
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        Magician[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magicians(Magicians) {
    Magicians.forEach(function (element) {
        console.log(element);
    });
}
make_great(Magician);
show_magicians(Magician);
