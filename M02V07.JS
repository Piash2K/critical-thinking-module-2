//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

// TODO  initiate empty object
// TODO Check if the response already exist or not
// TODO If it exist then increment the count
// TODO If not then initialize with 1

// const responses = surveyResponses.reduce((table, response) => {
//   if (table[response]) {
//     table[response] = table[response] + 1;
//   } else {
//     table[response] = 1;
//   }
//   return table;
// }, {});
// console.log(responses);
const responses = surveyResponses.reduce((table, response) => {
  table[response] = (table[response] || 0) + 1;
  return table;
}, {});
console.log(responses);
//? Output
// { A: 5, C: 3, B: 5, D: 1 }
