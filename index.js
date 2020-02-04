#!/usr/bin/env node
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');


// METHOD #2
// const lstat = util.promisify(fs.lstat);

// METHOD #3
const lstat = fs.promises.lstat;


// or using destructing can do the following:
// const { lstat } = fs.promises;

// EITHER: err === an error object, which means something went wrong or err === null, which means everything is OK

console.log(process.argv);

fs.readdir(process.cwd(), async (err, filenames) => {
  if(err){
    console.log(err);
  }

  const statPromises = filenames.map(filename => {
    return lstat(filename);
  });
  const allStats = await Promise.all(statPromises);

  for(let stats of allStats){
    const index = allStats.indexOf(stats);

    if(stats.isFile()){
      console.log(filename[index]);
    } else {
      console.log(chalk.bold(filenames[index]));
    }

    console.log(filenams[index], stats.isFile());
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
