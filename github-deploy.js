const execSync = require("child_process").execSync;

const repository = "abhinpai.github.io";
const dirpath = `/Users/abhinpai/Documents/MyProjects/React/${repository}`;

console.log("🔸Building package 🛠");
execSync("yarn build", { encoding: "utf-8" });

console.log("🔸Deleting previous package 🗑");
execSync(`rm -rf ${dirpath}/*`, { encoding: "utf-8" }); 
execSync("git add -A", {cwd: `${dirpath}`}, { encoding: "utf-8" }); 
execSync("git commit -m \"Cleaning repository\"", {cwd: `${dirpath}`}, { encoding: "utf-8" }); 
execSync("git push -u origin master", {cwd: `${dirpath}`}, { encoding: "utf-8" }); 

console.log("🔸Copying the build package into abhinpai.github.io 🚚");
execSync(`cp -r build/. ${dirpath}`, { encoding: "utf-8" }); 
console.log("🔸Package copied successfully ✅");

console.log(`🔸Publishing the 📦 to ${repository} repository`);
// execSync("git init", {cwd: `${dirpath}`}, { encoding: "utf-8" }); 
// execSync("git remote add origin https://github.com/abhinpai/abhinpai.github.io.git", {cwd: `${dirpath}`}, { encoding: "utf-8" }); 
execSync("git add -A", {cwd: `${dirpath}`}, { encoding: "utf-8" }); 
execSync("git commit -m \"Publishing package\"", {cwd: `${dirpath}`}, { encoding: "utf-8" }); 
execSync("git push -u origin master", {cwd: `${dirpath}`}, { encoding: "utf-8" }); 
console.log(`🥳 Hurry your website is live now 🌏🚀 https://abhinpai.github.io/`);
