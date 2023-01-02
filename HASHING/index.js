const bcrypt = require("bcrypt");

async function hash(text) {
  const salt = await bcrypt.genSalt(15);
  const hash = await bcrypt.hash(text, salt);
  return hash;
}

async function compare(text, hash) {
  if (await bcrypt.compare(text, hash)) return true;
  return false;
}

async function main() {
  const hashedPassword = await hash("1234");
  console.log(await compare("1234", hashedPassword));
  console.log(await compare("123", hashedPassword));
}

main();
