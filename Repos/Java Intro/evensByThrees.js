function validateItems() {
    var num1 = document.forms["numberFun"]["num1"].value;
    var num2 = document.forms["numberFun"]["num2"].value;
	var num3 = document.forms["numberFun"]["num3"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
	if (num2 == "" || isNaN(num2)) {
       alert("Num2 must be filled in with a number.");
       document.forms["numberFun"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["num2"].focus();
       return false;
	}
	if (num3 == "" || isNaN(num3)) {
        alert("Num3 must be filled in with a number.");
        document.forms["numberFun"]["num3"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num3"].focus();
        return false;
	}
}

function calculateEvens() {
	if (validateItems() == true) {
		var i;
		var displayString = "";
		num1 = document.forms["numberFun"]["num1"].value;
		num2 = document.forms["numberFun"]["num2"].value;
		num3 = document.forms["numberFun"]["num3"].value;
		for (i = num1 + num3; i > num2; i = i + num3) {
			displayString = displayString + i + " ";
		}
		document.getElementById("results").style.display = "block";
		document.getElementById("submitButton").innerText = "Recalculate";
		document.getElementById("evenMultiples").innerText = displayString;
		return false;
	}
}