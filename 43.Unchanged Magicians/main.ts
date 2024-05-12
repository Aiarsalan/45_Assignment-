
let Magician : string[] = ['Shin', 'Roger', 'David','Paul','Harry'];
 
function copyarray(arraypara:string[]){

return [...arraypara]
}



function make_great(magicianArray:string[] ){

    for(let i=0; i<magicianArray.length; i++){

        magicianArray[i]=  'The Great ' + magicianArray[i]

    }
}

function show_magicians(Magicians: string[]){

Magicians.forEach(element => {
    console.log(element);
    
});
}
const copyMagicianArray = copyarray(Magician)
make_great(copyMagicianArray);

console.log('Tnis is my original array:');
show_magicians(Magician)

console.log('Tnis is my modified copy array:');
show_magicians(copyMagicianArray)


