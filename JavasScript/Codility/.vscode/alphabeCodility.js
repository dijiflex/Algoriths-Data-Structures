// write a function that given three integers A, B and C, returns the longest possible diverse string containing at most A letters 'a' and most B letters 'b' and most C letters 'c'. if there is no such string, return the empty string.

function solution(a, b, c) {
    // write your code in JavaScript (Node.js 8.9.4)
    // let a = 0;
    // let b = 0;
    // let c = 0;
    let max = 0;
    let result = '';

    for (let i = 0; i < a; i++) {
        result += 'a';
    }

    for (let i = 0; i < b; i++) {
        result += 'b';
    }

    for (let i = 0; i < c; i++) {
        result += 'c';
    }

    console.log(result);
    return result;
}

// console.log(solution(1,3,1));
const longestDiverseString = function (a, b, c) {
    const len = a + b + c
    const chars = [
      ['a', a],
      ['b', b],
      ['c', c]
    ]
    const result = []
    while (result.length < len) {
      const i = result.length
      chars.sort(([c1, c1count], [c2, c2count]) => c2count - c1count)
      const char =
        result[i - 1] === result[i - 2] && result[i - 1] === chars[0][0] ? chars[1] : chars[0]
      if (char[1] === 0) break
      result.push(char[0])
      char[1]--
    }
    console.log(result.join(''))
    return result.join('')
  }

  longestDiverseString(0,1,8);