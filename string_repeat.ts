


//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
export function doubleChar(str: string): string{
    let repeatedString = '';
    for (let i = 0; i < str.length; i++) {
      repeatedString += str.charAt(i) + str.charAt(i);
    }
    return repeatedString;
  }

  const originalString = "Hello, World!";
  const repeatedString = doubleChar(originalString);
  console.log(repeatedString);  