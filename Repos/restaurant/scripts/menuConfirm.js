function confrimInfo() {
	var name = document.forms["mainForm"]["customerName"].value;
	var email = document.forms["mainForm"]["customerEmail"].value;
	var phone = document.forms["mainForm"]["customerPhone"].value;
	var letters = /^[A-Za-z]/
	var emailChars = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	var phoneChars = /^[0-9]{10}$/g;

	if (name = " " || !name.value.match(letters)) {
		alert("Please enter a valid name, alphabetical only!");
		return false;		
	}
	
	if (email = " " || !email.value.match(emailChars)) {
		alert("Please enter a valid email!");
		return false;
	}
	
	if (phone = " " || !phone.value.match(phoneChars)) {
		alert("Please enter a valid phone number!");
		return false;
	}
	
	if ($('input[name=customerDay]:checked').length = 0) {
		alert("Please tell us the best day(s) to reach you!");
		return false;
	}
	
	if ($('input[name=visited]:checked').length = 0) {
		alert("Please tell us if you have visited before!");
		return false;
	}
	
	else {
		alert("Thanks for submitting your form!")
		return false;
	}
}