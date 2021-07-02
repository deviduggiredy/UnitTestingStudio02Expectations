// function launchOutput(entry) {
//   output = "";
//   if (entry % 2 === 0) {
//     output += "Launch";
//   } else if (entry % 3 === 0) {
//     output += "Code";
//   } else if (entry % 5 === 0) {
//     output += "Rocks";
//   }

//   if (entry % 2 !== 0 && entry % 3 !== 0 && entry % 5 !== 0) {
//     output += "Rutabagas! That doesn't work";
//   }

//   if (output === "Launch Rocks!") {
//     output += "(Crash!!!)";
//   }

//   return output;
// }
function launchOutput(num) {
  //what do all of these if statesments have in common?
  let divisibles = [2, 3, 5];
  let outputs = ["Launch", "Code", " Rocks"];
  let answer = "";
  //what would make sence to iterate through in a for loop?
  for (let i = 0; i < divisibles.length; i++) {
    if (num % divisibles[i] === 0) {
      answer += outputs[i];
     }
  }
  if (answer === "") {
    return answer = "Rutabagas! That doesn't work.";
  } return answer.trim() + "!";
}
module.exports = launchOutput;
