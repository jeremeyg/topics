const form = {
  email: "user@example.com",
  password: "Passw0rd!",
  confirmPassword: "Passw0rd!",
  termsAccepted: true,
};

function validateForm(form) {
  if (!form.email.includes("@")) {
    return "Invalid email address.";
  }
  if (form.password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  if (form.password !== form.confirmPassword) {
    return "Passwords do not match.";
  }
  if (!form.termsAccepted) {
    return "You must accept the terms.";
  }
  return "Form is valid!";
}

console.log(validateForm(form));
