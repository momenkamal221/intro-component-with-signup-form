function sendErr(msgID, slab, field) {
	slab.classList.add("signup_err");
	switch (msgID) {
		case 0:
			slab.getElementsByClassName(
				"signup-c__err-msg"
			)[0].innerHTML = `${field.name} cannot be empty`;
			break;
		case 1:
			slab.getElementsByClassName(
				"signup-c__err-msg"
			)[0].innerHTML = `Looks like this is not an email`;
	}
}

function validationCheck() {
	const fnameSlab = document.getElementById("fnameSlab");
	const fnameField = fnameSlab.getElementsByTagName("input")[0];
	fnameSlab.classList.remove("signup_err");
	if (emptyCheck(fnameField.value)) {
		sendErr(0, fnameSlab, fnameField);
	}

	const lnameSlab = document.getElementById("lnameSlab");
	const lnameField = lnameSlab.getElementsByTagName("input")[0];
	lnameSlab.classList.remove("signup_err");
	if (emptyCheck(lnameField.value)) {
		sendErr(0, lnameSlab, lnameField);
	}

	const emailSlab = document.getElementById("emailSlab");
	const emailField = emailSlab.getElementsByTagName("input")[0];
	emailSlab.classList.remove("signup_err");

	var reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
	if (!emailField.value.match(reg)) {
		sendErr(1, emailSlab, emailField);
	}

	const pssSlab = document.getElementById("pssSlab");
	const pssField = pssSlab.getElementsByTagName("input")[0];
	pssSlab.classList.remove("signup_err");
	if (emptyCheck(pssField.value)) {
		sendErr(0, pssSlab, pssField);
	}
}

function emptyCheck(Field) {
	if (Field) return false;
	return true;
}
document.getElementById("claim").addEventListener("click", validationCheck);