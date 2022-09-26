// Language: javascript
function parseCsv(input, separator, quote) {
  separator = separator || ',';
  quote = quote || '"';
  const rows = input.split('\n');
  const result = [];
  console.log({ rows });
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowResult = [];
    let field = '';
    let inQuote = false;
    console.log(row)
    for (let j = 0; j < row.length; j++) {
      var current = row[j];
      console.log({current})
      if (inQuote) {
        if (current == quote) {
          if (j < row.length - 1 && row[j + 1] == quote) {
            field += quote;
            j++;
          } else {
            inQuote = false;
          }
        } else {
          field += current;
        }
      } else {
        if (current == quote) {
          inQuote = true;
        } else if (current == separator) {
          rowResult.push(field);
          field = '';
        } else {
          field += current;
        }
      }
    }
    rowResult.push(field);
    result.push(rowResult);
  }
  return result;
}

const csv = `1,2,3
4,5,6`;
const csv2 = `1,"two was here",3
4,5,6`;
const csv3 = `1\t2\t3
4\t5\t6`;
const response = parseCsv(csv2);
console.log({response});
