
let GuestList : string [] = ["Khala", "Mami", "Taya", "chacha" ];

let regrettoDinner : string = GuestList.splice(0,1)[0];

console.log(`${regrettoDinner} regretted to dinner`);

GuestList.push("Phopo");

GuestList.forEach (guest => {

console.log(`Dear ${guest}, you are invited for dinner tonight.`)


})




