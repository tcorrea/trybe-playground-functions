// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrNames) {
  return `${arrNames[arrNames.length - 1]}, ${arrNames[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  let count = 0;
  let biggest = numbers.reduce(function (previousValue, currentValue) {
    return Math.max(previousValue, currentValue);
  });

  for (const number of numbers) {
    if (number === biggest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);

  if (distCat1 > distCat2) {
    return 'cat2';
  }
  if (distCat1 < distCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 FIXME:
function fizzBuzz(numbers) {
  let result = [];

  for (let number of numbers) {
    if (number % 3 === 0 && number % 5 !== 0) {
      result.push('fizz');
    }
    if (number % 5 === 0 && number % 3 !== 0) {
      result.push('buzz');
    }
    if (number % 3 === 0 && number % 5 === 0) {
      result.push('fizzBuzz');
    }
    if (number % 3 !== 0 && number % 5 !== 0) {
      result.push('bug!');
    }
  }
  return result;
}

let data = { a: 1, e: 2, i: 3, o: 4, u: 5 };

// Desafio 9
function encode(sentence) {
  let encodedSentence = '';
  for (let word of sentence) {
    if (word in data) {
      encodedSentence += data[word];
    } else {
      encodedSentence += word;
    }
  }
  return encodedSentence;
}
function decode(sentence) {
  let decodedSentence = '';

  for (let word of sentence) {
    if (Object.values(data).includes(parseInt(word))) {
      decodedSentence += Object.keys(data).find((key) => data[key] === parseInt(word));
    } else {
      decodedSentence += word;
    }
  }

  return decodedSentence;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
