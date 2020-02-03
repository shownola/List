#!/usr/bin/env node
const fs = require('fs');
const util = require('util');


// METHOD #2
const lstat = util.promisify(fs.lstat);


// EITHER: err === an error object, which means something went wrong or err === null, which means everything is OK
fs.readdir(process.cwd(), (err, filenames) => {
  if(err){
    console.log(err);
  }



});


// WRAP LSTAT IN A PROMISE METHOD #1
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if(err){
//         reject(err);
//       }
//       resolve(stats);
//     });
//   });
// };
