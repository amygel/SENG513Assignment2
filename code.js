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

    return {
        nChars: nChars,
        nWords: nWords,
        nLines: nLines,
        nNonEmptyLines: nNonEmptyLines,
        averageWordLength: aveWordLen,
        maxLineLength: maxLineLength,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
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
    let max = 0;

    let lines = txt.split("\n");

    for (line of lines) {
        let count = getNumberOfChars(line);
        if(count > max) {
            max = count;
        }
    }

    return max;
}