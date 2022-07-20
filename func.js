const readLineSync = require("readline-sync");
const validate = require("./validate");

function addContact(arrayContact , newContact) {
        arrayContact.push(newContact);
}

function search(arrayContact , choose){
    let check = false;
    if (choose === "p") {
        let phoneSearch = readLineSync.question("Search by phone : ");
        arrayContact.forEach(function(element){
            if(element.phone.includes(phoneSearch)) {
                console.log(element);
                check = true;
            }
        });
    } else if(choose === "n") {
        let nameSearch = readLineSync.question("Search by name : ");
        arrayContact.forEach(function(element){
            if(element.name.includes(nameSearch)) {
                console.log(element);
                check = true;
            }
        });
    }

    if (!check) 
        console.log("No Result");
}

function update(arrayContact , choose_update ){
    if (choose_update === "n") {
        const name_update = readLineSync.question(" Name to update : ");
        const newName = readLineSync.question(" New Name : ");
        function findName(item) { 
            return item.name === name_update;
        }
        let contact_update = arrayContact.find(findName);
        contact_update.name = validate.validateName(newName);
    } else if (choose_update === "p") {
        const phone_update = readLineSync.question(" phone to update : ");
        const newPhone = readLineSync.question(" New phone : ");
        while(!validate.validatePhoneNumber(newPhone)){
            newPhone = readLineSync.question("Your phone is invalid . Please re-write : ");
        }
        function findphone(item) { 
            return item.phone === phone_update;
        }
        let contact_update = arrayContact.find(findphone);
        contact_update.phone = newPhone;
    } else {
        const name_update = readLineSync.question(" Name to update : ");
        const newName = readLineSync.question(" New Name : ");
        const newPhone = readLineSync.question(" New Phone : ");
        while(!validate.validatePhoneNumber(newPhone)){
            newPhone = readLineSync.question("Your phone is invalid . Please re-write : ");
        }
        function findName(item) { 
            return item.name === name_update;
        }
        let contact_update = arrayContact.find(findName);
        contact_update.name = validate.validateName(newName);
        contact_update.phone = newPhone;
    }

}
function remove(arrayContact , choose_update ){
    if (choose_update === "n") {
        const name_update = readLineSync.question(" Name to remove : ");
        function findIndex(item) { 
            return item.name === name_update;
        }
        let index_remove = arrayContact.findIndex(findIndex);
        arrayContact.splice(index_remove , 1);
    } else if (choose_update === "p") {
        const phone_update = readLineSync.question(" Phone to remove : ");
        function findIndex(item) { 
            return item.phone === phone_update;
        }
        let index_remove = arrayContact.findIndex(findIndex);
        arrayContact.splice(index_remove , 1);
    }
}

module.exports = {addContact , search, update, remove};
