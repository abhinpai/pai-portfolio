Promise.all(
  ['module1', 'module2', 'module3'].map((x) => System.import(x))
).then(function ([module1, module2, module3]) {
  // my code...
});
