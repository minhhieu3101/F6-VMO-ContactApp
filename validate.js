
function validateName(name){

    const arr = name.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    name = arr.join(" ");
    return name;
}

function validatePhoneNumber(str) {
  	const regexPhoneNumber = /^((\+)|0)[1-9](\d{2}){4}$/; 

	if (str.match(regexPhoneNumber)) {
		return true;
	} else {
		return false;
	}
}

module.exports.validateName = validateName;
module.exports.validatePhoneNumber = validatePhoneNumber;
