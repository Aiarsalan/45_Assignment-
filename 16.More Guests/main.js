var GuestList = ["Phopo", "Mami", "Taya", "chacha"];
console.log("I am pleased to informed that! we arrange the bigger table");
GuestList.unshift("cousin");
GuestList.splice(Math.floor(GuestList.length / 2), 0, "friend");
GuestList.push("other relative");
GuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You all are invited to grand dinner "));
});
