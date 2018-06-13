

function validateForm() {
	var eMail = document.getElementById("email").value;
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	var object = document.getElementById("object").value;
	var text = document.getElementById("msg").value;
	if 	(eMail == "" || firstName == "" || lastName == "" || object == "" || text == "") {
		alert("Please, fill in all fields...");
		return false
	}
	else if (text.length >= 4000) {
		alert("Sorry! Your message is too long...");
		return false
	}
	else {
		return true
	}	
}




