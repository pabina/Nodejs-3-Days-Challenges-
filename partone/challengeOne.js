const fs=require("fs");
fs.writeFileSync("first.txt","hello pabina how are you");
fs.appendFileSync("first.txt"," this content should be added");
