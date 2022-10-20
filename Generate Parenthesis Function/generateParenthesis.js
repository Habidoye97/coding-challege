

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  const addParanthesis = (cur, open, close) => {
    if (cur.length === n * 2) {
      res.push(cur);
      return;
    }
    if (open < n) { addParanthesis(cur + '(', open + 1, close); }
    if (close < open) { addParanthesis(cur + ')', open, close + 1); }
  };
  const res = [];
  addParanthesis('', 0, 0);
  return res;
};


// const addParenthesis = (prefix, opened, closed) => {
//   if (closed === n) { res.push(prefix); }
//   if (opened < n) { addParenthesis(prefix + '(', opened + 1, closed); }
//   if (closed < opened) { addParenthesis(prefix + ')', opened, closed + 1); }
// };