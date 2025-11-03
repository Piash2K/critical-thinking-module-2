const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

// const obj = {};
// obj[course2] = { courseId: "Level2" };
// obj[course1] = { courseId: "level1" };
// console.log(obj);

// const map = new Map();

// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });
// map.clear()
// map.delete(course1)
// console.log(map)
// map.forEach((value, key)=> key.name = "Shohoz Shorol Simple " + key.name)
// console.log([...map.keys()])
// console.log([...map.values()])

// for (let key of map.keys()) {
//   key.name = "Shohoz Shorol Simple " + key.name;
// }
// console.log(map)
// console.log(map.entries())

// const courses = [
//   ["Programming Hero", "Level1"],
//   ["Next Level", "Level2"],
// ];

// const map = new Map(courses );
// console.log(map)
const courses = [
  [course1, "Level1"],
  [course2, "Level2"],
];

const map = new Map(courses );
console.log(map)