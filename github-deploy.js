const execSync = require("child_process").execSync;

const repository = "abhinpai.github.io";
const portfoliorepo = "pai-portfolio";
const portfolioPath = `/Users/abhinpai/Documents/MyProjects/React/${portfoliorepo}`;
const dirpath = `/Users/abhinpai/Documents/MyProjects/React/${repository}`;
console.log("🔸Building package 🛠");
execSync("yarn build", { encoding: "utf-8" })
console.log("🔸Copying the build package into abhinpai.github.io 🚚");
execSync(`cp -r build ${dirpath}`, { encoding: "utf-8" }); 
console.log("🔸Package copied successfully ✅");
console.log(`🔸Changing directory to ${repository}`);
execSync(`cd ${dirpath}`, { encoding: "utf-8" }); 
console.log(`Publishing the 📦 to ${repository} repository`);
execSync(`git add -A`, { encoding: "utf-8" }); 
execSync(`git commit -m  "Publishing package"`, { encoding: "utf-8" }); 
execSync(`git push -u origin master"`, { encoding: "utf-8" }); 
console.log(`🥳 Hurry your website is live now 🌏🚀 https://abhinpai.github.io/`);
execSync(`cd ${portfolioPath}`, { encoding: "utf-8" }); 
