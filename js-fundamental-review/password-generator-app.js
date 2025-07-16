const generatePassword = (length) => {
  let password = "";
  const passSource = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const sourceLength = passSource.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * sourceLength);
    const passChunk = passSource.charAt(randomIndex);
    password = password.concat(passChunk);
  }
  return password;
}

const password = generatePassword(10);

console.log("Generated password: " + password);