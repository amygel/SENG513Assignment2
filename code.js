//
// this is just a stub for a function you need to implement
// Hand in zip with 2 files inside
//
function getStats(txt) {
    let nChars = getNumberOfChars(txt);
    let nWords = getNumberOfWords(txt);
    let nLines = getNumberOfLines(txt);
    let nNonEmptyLines = getNumberOfNonEmptyLines(txt);
    let aveWordLen = getAveWordLength(txt);
    let maxLineLength = getMaxLineLength(txt);
    let palindromes = getPalindromes(txt);
    let longestWords = getLongestWords(txt);

    return {
        nChars: nChars,
        nWords: nWords,
        nLines: nLines,
        nNonEmptyLines: nNonEmptyLines,
        averageWordLength: aveWordLen,
        maxLineLength: maxLineLength,
        palindromes: palindromes,
        longestWords: longestWords,
        mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}

// Ref tutorial
function getNumberOfChars(txt) {
    if (!txt){
        return 0;
    }

    let re = /./g;

    let arr = txt.match(re);
    return arr.length;
}

function getNumberOfWords(txt) {
    if (!txt){
        return 0;
    }

    let re = /([-'a-z\d-])([-'a-z\d])+|([a-z\d])/ig;

    let arr = txt.match(re);
    return arr.length;
}

function getNumberOfLines(txt) {
    if (!txt){
        return 0;
    }

    let count = 0;
    let re = /([\n])/g;

    let arr = txt.match(re);
    if (arr) {
        count = arr.length;
    }

    let lastLine = getLastLine(txt);
    if (lastLine) {
        count++;
    }

    return count;
}

function getLastLine(txt) {
    if(txt.lastIndexOf("\n")>0) {
        return txt.substring(txt.lastIndexOf("\n"), txt.length + 1);
    } else {
        return txt;
    }
}

function getNumberOfNonEmptyLines(txt) {
    if (!txt){
        return 0;
    }

    let numLines = getNumberOfLines(txt);

    let re = /(^\s*$)/gm;

    let arr = txt.match(re);
    if (arr) {
        return numLines - arr.length;
    }

    return numLines;
}

function getAveWordLength(txt) {
    if (!txt){
        return 0;
    }

    let count = 0;
    let sum = 0;
    let arr;

    let re = /([-'a-z\d-])([-'a-z\d])+|([a-z\d])/ig;

    while ((arr = re.exec(txt)) !== null) {
        sum+=arr[0].length;
        count++;
    }
    return sum/count;
}

function getMaxLineLength(txt) {
    if (!txt){
        return 0;
    }

    let max = 0;
    let line;
    let lines = txt.split("\n");

    for (line of lines) {
        let count = getNumberOfChars(line);
        if(count > max) {
            max = count;
        }
    }

    return max;
}

function getPalindromes(txt) {
    if (!txt){
        return [];
    }

    let palindromes = [];
    let word;
    let re = /([-'a-z\d-])([-'a-z\d])+|([a-z\d])/ig;

    let arr = txt.match(re);
    for (word of arr) {
        if (word.length > 2) {
            let reverse = reverseString(word);
            if (reverse.toUpperCase() === word.toUpperCase()) {
                palindromes.push(word);
            }
        }
    }

    return palindromes;
}

//https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.nnzsan6oy
function reverseString(txt) {
    let splitString = txt.split("");

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("");

    return joinArray;
}

// Longest include duplicates?
function getLongestWords(txt) {
    if (!txt){
        return [];
    }

    let longestList = [];
    let re = /([-'a-z\d-])([-'a-z\d])+|([a-z\d])/ig;
    let longest;
    let arr = txt.match(re);
    for (let i = 0; arr.length > 0 && i < 10; i++) {
        // http://stackoverflow.com/questions/6521245/finding-longest-string-in-array
        longest = arr.reduce(function (a, b) { return a.length > b.length ? a : b; });
        let index = arr.indexOf(longest);
        arr.splice(index, 1);
        longestList.push(longest.toLowerCase());
    }

    // http://stackoverflow.com/questions/6129952/javascript-sort-array-by-two-fields
    longestList.sort(function (a,b) {
        let aLength = a.length;
        let bLength = b.length;

        if(aLength == bLength)
        {
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        }
        else
        {
            return (aLength > bLength) ? -1 : 1;
        }
    });

    return  longestList;
}
