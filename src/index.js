const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
     const chunks = new Array();
    const numChunks = Math.ceil(expr.length / 10);

    for (let i = 0, o = 0; i < numChunks; ++i, o += 10) {
      chunks[i] = expr.substr(o, 10)
    }
    for (let j=0; j < numChunks; j++) {
        let str=chunks[j]; 
        let strArr = str.split("");
    while(strArr[0] === "0") strArr.shift();
    let arrString= strArr.join('')
    chunks[j] =arrString;
    }





for (let z =0; z < numChunks; z++ ) {
chunks[z] = chunks[z]
    .replace(/11/g, '-')
    .replace(/10/g, '.');
}

  let result = [];
  for (let z =0; z < numChunks; z++ ) {
  result[z] = MORSE_TABLE[chunks[z]];
  }
  console.log(result.join(''));
  return result.join('');


}

module.exports = {
    decode
}
