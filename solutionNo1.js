#!/usr/bin/env node
const fs = require('fs');

// SOLUTION I: MAINTAIN AN ARRAY OF THE RESULTS FROM EACH LSTAT. AS EACH CALLBACK IS INVOKE, ADD THE STATS OBJECT TO THIS ARRAY. WHEN ARRAY IS FULL, LOG EVERYTHING IN IT.

// EITHER: err === an error object, which means something went wrong or err === null, which means everything is OK
fs.readdir(process.cwd(), (err, filenames) => {
  if(err){
    console.log(err);
  }


  const allStats = Array(filenames.length).fill(null);

  for(let filename of filenames){
    const index = filenames.indexOf(filename);

    fs.lstat(filename, (err, stats) => {
      if(err){
        console.log(err);
      }
      allStats[index] = stats;

      const ready = allStats.every((stats) => {
        return stats;
      });
      if(ready){
        allStats.forEach((stats, index) => {
          console.log(filenames[index], stats.isFile());
        })
      }
    });
  }

});
