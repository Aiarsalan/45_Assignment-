var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Magician = ['Shin', 'Roger', 'David', 'Paul', 'Harry'];
function copyarray(arraypara) {
    return __spreadArray([], arraypara, true);
}
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magicians(Magicians) {
    Magicians.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianArray = copyarray(Magician);
make_great(copyMagicianArray);
console.log('Tnis is my original array:');
show_magicians(Magician);
console.log('Tnis is my modified copy array:');
show_magicians(copyMagicianArray);
