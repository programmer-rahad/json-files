/**
 * String
 */

// MyConcat (1)
{
  String.prototype.myConcat = function () {
    let result = this;
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  };
}
// MyConcat (2)
{
  String.prototype.myConcat = function (sep) {
    let result = this;
    for (let i = 1; i < arguments.length; i++) {
      result += sep + arguments[i];
    }
    return result;
  };
}

// MyEndsWith (1)
{
  function myEndsWith(str, end) {
    if (!end) return false;
    let reverseStr = "";
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }

    for (let i = end.length - 1; i >= 0; i--) {
      result += reverseStr[i];
    }
    return result === end;
  }
  console.log(myEndsWith("Amar sonar bangla ami tomay", "ami tomay"));
}

// MyEndsWith (2)
{
  String.prototype.myEndsWith = function (end) {
    if (!end) return false;
    let reverseStr = "";
    let result = "";
    for (let i = this.length - 1; i >= 0; i--) {
      reverseStr += this[i];
    }
    for (let i = end.length - 1; i >= 0; i--) {
      result += reverseStr[i];
    }
    return result === end;
  };
  console.log("amar sonar bangla ami".myEndsWith("i"));
}

// MyEndsWith (3)
{
  function myEndsWith(str, end) {
    if (!end) return false;
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (i < str.length - end.length) {
        continue;
      }
      result += str[i];
    }
    return result == end;
  }

  console.log(myEndsWith("bangladesh is a developing country", "country"));
}

// MyEndsWith (4)
{
  function myEndsWith(str, end) {
    return str.slice(-end.length) === end;
  }
  console.log(myEndsWith("amar sonar bangla ami tomay valobashi", "valobashi"));
}

// MyEndsWith (5)
String.prototype.myEndsWith = function (word) {
  let str = "";
  for (let i = this.length - word.length; i < this.length; i++) {
    str += this[i];
  }
  return str === word;
};

// MyStartWith (1)
{
  function myStartWith(str, start) {
    let result = "";
    for (let i = 0; i < start.length; i++) {
      result += str[i];
    }
    return result === start;
  } 
}

// MyStartWith (2)
{
  function myStartWith(str, start) {
    return str.slice(0, start.length) === start;
  } 
}

// MyStartWith (3)
{
  String.prototype.myStartWith = function (word) {
    let str = "";
    for (let i = 0; i < word.length; i++) {
      str += this[i];
    }
    return str === word;
  };
}

// MyLength (1)
{
  String.prototype.myLength = function () {
    let i = 0;
    while (this[i]) i++;
    return i;
  };
}

// MyRepeat (1)
{
  String.prototype.myRepeat = function (num) {
    let result = this;
    for (let i = 1; i < num; i++) {
      result += this;
    }
    return result;
  };
}
// MyToLowerCase (1) 
{
  String.prototype.myToLowerCase = function () {
    let result = "";
    for (let i = 0; i < this.length; i++) {
      const charCode = this[i].charCodeAt();
      result +=
        charCode > 64 && charCode < 91
          ? String.fromCharCode(charCode + 32)
          : this[i];
    }
    return result;
  };
}

// MyToUpperCase (1)
{
  String.prototype.myToLowerCase = function () {
    let result = "";
    for (let i = 0; i < this.length; i++) {
      const charCode = this[i].charCodeAt();
      result +=
        charCode > 64 && charCode < 91
          ? String.fromCharCode(charCode + 32)
          : this[i];
    }
    return result;
  };
}

// Custom Capitalize (1)
{
  String.prototype.myToCapitalize = function () {
    let capitalize = "";

    for (let i = 0; i < this.length; i++) {
      const charCode = this[i].charCodeAt();
      if (this[i] === " ") {
        const charCode = this[i + 1].charCodeAt();
        capitalize +=
          " " +
          (charCode > 96 && charCode < 123
            ? String.fromCharCode(charCode - 32)
            : this[i + 1]);
      } else {
        if (this[i - 1] === " ") continue;
        capitalize +=
          charCode > 64 && charCode < 91
            ? String.fromCharCode(charCode + 32)
            : this[i];
      }
    }

    const charCode = capitalize[0].charCodeAt();
    capitalize =
      (charCode > 96 && charCode < 123
        ? String.fromCharCode(charCode - 32)
        : capitalize[0]) + capitalize.slice(1);
    return capitalize;
  };
}

// Custom Capitalize (2)
function customCapitalize(string) {
  // Friday 03 September 2021

  // STEPS :
  // 1. Make all the charcter lowercase
  // 2. split all the words to an array by space
  // 3. Make all the first charcter uppercase of the array
  // 4. Then join the array by spacing

  // 1
  let lowerCaseString = '';
  for (let i = 0; i < string.length; i++) {
    const charCode = string[i].charCodeAt();
    lowerCaseString +=
      charCode > 64 && charCode < 91
        ? String.fromCharCode(charCode + 32)
        : string[i];
  }

  // 2
  let lowerCaseWordsArr = [];
  let j = 0;
  lowerCaseString += ' ';
  for (let i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i].charCodeAt() === 32) {
      let word = '';
      for (; j < i; j++) {
        word += lowerCaseString[j];
      }
      j++;
      lowerCaseWordsArr.push(word);
    }
  }

  // 3
  let capitalizeWordsArr = [];
  for (let i = 0; i < lowerCaseWordsArr.length; i++) {
    const firstCharCode = lowerCaseWordsArr[i][0].charCodeAt();
    const firstUpperChar =
      firstCharCode > 96 && firstCharCode < 123
        ? String.fromCharCode(firstCharCode - 32)
        : lowerCaseWordsArr[i][0];
    capitalizeWordsArr.push(
      firstUpperChar + lowerCaseWordsArr[i].slice(1)
    );
  }

  // 4
  let capitalizeString = '';
  for (let i = 0; i < capitalizeWordsArr.length; i++) {
    capitalizeString += capitalizeWordsArr[i] + ' ';
  }
  return capitalizeString.slice(0, -1);
}

// Custom Capitalize (2)
function anotherCustomCapitalize(string) {
  // 03 September 2021, Friday
  
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ' && string[i + 1]) {
      const charCode = string[i + 1].charCodeAt();
      const letter =
        charCode > 96 && charCode < 123
          ? String.fromCharCode(charCode - 32)
          : string[i + 1];
      result += ' ' + letter;
    } else {
      if (string[i - 1] === ' ') {
        continue;
      }
      const charCode = string[i].charCodeAt();
      const letter =
        charCode > 64 && charCode < 91
          ? String.fromCharCode(charCode + 32)
          : string[i];
      result = result.concat(letter);
    }
  }
  const firstChar = result[0].charCodeAt();
  const firstLetter =
    firstChar > 96 && firstChar < 123
      ? String.fromCharCode(firstChar - 32)
      : result[0];
  result = firstLetter + result.slice(1);

  return result;
}




// MyTrimLeft (1)
{
  String.prototype.myTrimLeft = function () {
    let result = "";
    let start;
    for (let i = 0; i < this.length; i++) {
      if (this[i] !== " ") {
        start = i;
        break;
      }
    }
    for (; start < this.length; start++) {
      result += this[start];
    }
    return result;
  };
}

// MyTrimRight (1)
{
  String.prototype.myTrimRight = function () {
    let result = "";
    let end;
    for (let i = this.length - 1; i >= 0; i--) {
      if (this[i] !== " ") {
        end = i;
        break;
      }
    }
    for (let i = 0; i <= end; i++) {
      result += this[i];
    }
    return result;
  };
}

// MyTrim (1)
{
  String.prototype.myTrim = function () {
    let result = "";
    let start, end;
    for (let i = 0; i < this.length; i++) {
      if (this[i] !== " ") {
        start = i;
        break;
      }
    }
    for (let i = this.length - 1; i >= 0; i--) {
      if (this[i] !== " ") {
        end = i;
        break;
      }
    }
    for (let i = start; i <= end; i++) {
      result += this[i];
    }
    return result;
  };
}

// MySplit (1)
{
  String.prototype.mySplit = function (sep) {
    let string = this + sep;
    let result = "";
    let words = [];
    if (sep === "" /* !sep */) {
      for (let i = 0; i < this.length; i++) {
        words.push(this[i]);
      }
      return words;
    }

    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === sep) {
        let word = "";
        for (; j < i; j++) {
          word += string[j];
        }
        words.push(word);
        j++;
      }
    }

    return words;
  };
}

/**
 * Array */

// Function: Custom ForEach with Callback
let customForEach = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

// Function: Custom Map with Callback
let customMap = function (arr, callback) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr[resultArr.length] = callback(arr[i], i, arr);
  }

  return resultArr;
};
values = [1, 2, 3, 4, 5];
result = customMap(values, function (value) {
  return value * 2;
});

// Function: Custom Map with Callback
let customFilter = function (arr, callback) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
};
