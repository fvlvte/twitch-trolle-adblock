const fs = require("fs");

const listaTroli = [
  "shadoweeee",
  "piotrostroleka",
  "jepetto"
];

const output = [];

for(let trol of listaTroli)
{
  output.push(`www.twitch.tv##.seventv-message :contains("${trol}")`);
}

fs.writeFileSync("trole.txt", output.join("\n"), "utf8");
