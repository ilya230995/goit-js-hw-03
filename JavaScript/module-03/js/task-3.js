const findBestEmployee = function (employees) {
  const allEmployees = Object.keys(employees);
  let maxNumber = 0;
  let bestEmployee;
  for (const worker of allEmployees) {
    if (employees[worker] > maxNumber) {
      maxNumber = employees[worker];
      bestEmployee = worker;
    }
  }
  return bestEmployee;
};

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux