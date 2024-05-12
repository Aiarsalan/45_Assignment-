var personNanme = "Arsalan Jilani";
console.log(personNanme.toLowerCase());
console.log(personNanme.toUpperCase());
console.log(personNanme.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
