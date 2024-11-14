function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "1234567890";
  const symbolChars = "!@#$%^&**";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ?
}

const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(password);
