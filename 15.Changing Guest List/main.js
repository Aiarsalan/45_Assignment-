var GuestList = ["Khala", "Mami", "Taya", "chacha"];
var regrettoDinner = GuestList.splice(0, 1)[0];
console.log("".concat(regrettoDinner, " regretted to dinner"));
GuestList.push("Phopo");
GuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited for dinner tonight."));
});
