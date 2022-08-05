// SHOW AND HIDE PASSWORD
const passwordToggleBtn = document.getElementById("passwordToggleBtn");
if (passwordToggleBtn) {
	const eyeIcon = document.querySelector("#passwordToggleBtn i");
	const signInPassword = document.getElementById("signInPassword");
	passwordToggleBtn.addEventListener("click", () => {
		if (eyeIcon.classList.contains("bi-eye")) {
			eyeIcon.classList.remove("bi-eye");
			eyeIcon.classList.add("bi-eye-slash");

			signInPassword.setAttribute("type", "text");
		} else {
			eyeIcon.classList.remove("bi-eye-slash");
			eyeIcon.classList.add("bi-eye");

			signInPassword.setAttribute("type", "password");
		}
	});
}
