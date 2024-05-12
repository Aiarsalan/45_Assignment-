let GuestList : string [] = ["Cousin", "Phopo","Friend", "Mami", "Taya", "chacha","Other relative" ];

console.log("I am sorry to inform you that bigger dinner table cancelled for dinner, and the new table have only space for two person. ");

while(GuestList.length > 2) {

let Removedguest : string | undefined = GuestList.pop();

if (Removedguest !== undefined) {

    console.log( `Sorry ${Removedguest}, we can't invite you.`   );

}}

GuestList.forEach(guest => {
console.log(`Dear ${guest} You are still invited for the dinner tonight.    `);


})

GuestList.splice(0,GuestList.length)

console.log("updated list of guest at the end of the dinner:", GuestList)

