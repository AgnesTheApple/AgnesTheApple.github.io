

function validateForm() {
	var eMail = document.getElementById("email").value;
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	var object = document.getElementById("object").value;
	var text = document.getElementById("msg").value;
	if 	(eMail == "" || firstName == "" || lastName == "" || object == "" || text == "") {
		alert("Oups! Certains champs sont vides...");
		return false
	}
	else if (text.length >= 4000) {
		alert("Oups! Vous avez dépassé le nombre max de caractères");
		return false
	}
	else {
		return true
	}	
}




