//
// this is just a stub for a function you need to implement
// Hand in zip with 2 files inside
//
function getStats(txt) {
    let nChars = getNumberOfChars(txt)
    let nWords = getNumberOfWords(txt)
    //let nLines = getNumberOfLines(txt)
    let aveWordLen = getAveWordLength(txt)

    return {
        nChars: nChars,
        nWords: nWords,
        nLines: 0,
        nNonEmptyLines: 22,
        averageWordLength: aveWordLen,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}

// Ref tutorial
function getNumberOfChars(txt) {
    let re = /./g;

    let arr = txt.match(re);
    return arr.length;
}

function getNumberOfWords(txt) {
    let re = /([-'a-z\d-])([-'a-z\d])+|([a-z\d])/ig;

    let arr = txt.match(re);
    return arr.length;
}

function getNumberOfLines(txt) {
    let re = /([\n])/g;

    let arr = txt.exec(re);
    return arr.length;
}

function getAveWordLength(txt) {
    let count = 0
    let sum = 0
    let arr;

    let re = /([-'a-z\d-])([-'a-z\d])+|([a-z\d])/ig;

    while ((arr = re.exec(txt)) !== null) {
        sum+=arr[0].length
        count++;
    }
    return sum/count;
}

