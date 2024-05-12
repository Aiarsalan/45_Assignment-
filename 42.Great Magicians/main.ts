
let Magician : string[] = ['Shin', 'Roger', 'David','Paul','Harry'];
 
function make_great(magicianArray:string[] ){

    for(let i=0; i<magicianArray.length; i++){

      Magician[i]=  'The Great ' + magicianArray[i]

    }
}

function show_magicians(Magicians: string[]){

Magicians.forEach(element => {
    console.log(element);
    
});
}

make_great(Magician);
show_magicians(Magician)