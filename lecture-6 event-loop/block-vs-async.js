const { error } = require('console');
const fs =require('fs');

console.log("1. Start of Script!");

//synchronous (Bloacking) operation
console.log("2. Reading File syncronously");
const dataSync = fs.readFileSync('user-details.txt','utf8');
console.log("3. Synchronous read complete.");

//Asynchronous (Non-Blocking) operation
consle.log("4. Reading file asynchronously");
fs.readFile('user-details.txt','utf8',(error, dataAsync) => {
    if(error){
        throw error;
        console.log("6. Asynchronous read complete.");
    }    
})

console.log("5. End of Script!");




