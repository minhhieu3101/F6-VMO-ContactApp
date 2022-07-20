const readLineSync = require('readline-sync');
const fs = require('fs');
const file = fs.readFileSync("./db.json" , {encoding : "utf8"});
const ContactArray = JSON.parse(file);
const validate = require("./validate");
const func = require("./func");
let choice;
let check = true ;

const newContact = () => {
    let name = readLineSync.question("Name : ");
    name = validate.validateName(name);
    let phone = readLineSync.question("Your phone : ");
    while(!validate.validatePhoneNumber(phone)){
        phone = readLineSync.question("Your phone is invalid . Please re-write : ");
    }
    return {name , phone};
}

const menu = () => {
    choice = readLineSync.question( "\n" +"Menu Contact :" + "\n" + "1. Show contacts" + 
    "\n" + "2.Add Contact" + "\n" + "3.Update Contact" + "\n" + "4.Remove Contact" +
    "\n" + "5.Search Contact" + "\n" + "6.Exit" + "\n" + "--> Your choose: ");
    console.log("\n");
}

// save db.json
const saveDB = () => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(ContactArray)); 
      } catch(err) {
        console.error(err);
    }
}

do{
    menu();
    switch(choice){
        case "1" :
            console.log("Show Contact");
            console.log(ContactArray);
            break;

        case "2" :
            console.log("Add Contact");
            const contact = newContact();
            func.addContact(ContactArray , contact);
            console.log("Add success");
            console.log(ContactArray);
            saveDB();
            break;

        case "3" :
            console.log("Update Contact");
            let choose_update = readLineSync.question("Do you want to update name or phone number or both? [N/P/B] ")
            console.log(ContactArray);
            func.update(ContactArray, choose_update);
            console.log("Update success");
            console.log(ContactArray);
            saveDB();
            break;

        case "4" :
            console.log("Remove Contact");
            let choose_remove = readLineSync.question("Do you want to remove by name or phone number? [N/P] ")
            console.log(ContactArray);
            func.remove(ContactArray, choose_remove);
            console.log("Remove success");
            console.log(ContactArray);
            saveDB();
            break;
            
        case "5" :
            console.log("Search Contact");
            let choose = readLineSync.question("Do you want to search by name or phone number? [N/P] ")
            func.search(ContactArray,choose);
            saveDB();
            break;

        case "6" :
            check = false;
            break;
    }
} while(check)


