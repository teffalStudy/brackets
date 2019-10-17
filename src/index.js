module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 > 0) {
    return false;
  }

  let pair_brackets = '';
  let cut_str = str;
  for (let s = 0; s < str.length/2; s++) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      pair_brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
      cut_str = cut_str.replace(pair_brackets, '');
    }
  }

  return cut_str.length == 0
}
