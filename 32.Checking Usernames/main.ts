import { log } from "console";

let current_users: string[] = ['HiNa', 'AreeBa', 'MuqaddaS', 'ZaRa', 'JoHn'];

let new_users: string[] = ['Rani', 'HiNa', 'LaiBa', 'AmishA', 'ZaRa'];

new_users.forEach(newuserName => {

    let lowercase: string = newuserName.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){


        console.log(`The username ${newuserName} is not available. Please write a different username`);
    }   
    else{
        console.log(`The username ${newuserName} is available`);
    
    }
})  



