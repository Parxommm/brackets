module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const OPEN_BRACKETS = bracketsConfig.map(pair => pair[0]);
  const BRACKETS_PAIR = {};
  bracketsConfig.forEach(pair => BRACKETS_PAIR[pair[1]] = pair[0]);
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    if (OPEN_BRACKETS.includes(currentSymbol)) {
      if (currentSymbol === BRACKETS_PAIR[currentSymbol] && currentSymbol === topElement) {
        stack.pop();
      } else {
        stack.push(currentSymbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
