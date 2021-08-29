const get = require("./tut2/modules/getUsers");
const exportData = require("./tut2/modules/dataExport.js");
console.log(`[OPTIONS]\n--get --export EnteryourFilename.json`);
// con get() chiamo i dati dal sito e con exportData()li scrivo in un file
get().then((response) => {
  console.log(response);
  exportData('test.json',response)
});
