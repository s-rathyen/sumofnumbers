const nums = [1, 2, 3, 4];

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor(nums));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(nums));

function sumRecursion(list, num) {
  if (num === 0) {
    return list[num];
  }
  return list[num] + sumRecursion(list, num - 1);
}

console.log(sumRecursion(nums, nums.length - 1));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(nums));
