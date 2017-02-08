//
// this is just a stub for a function you need to implement
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

// Do new line characters count as chars
function getNumberOfChars(txt) {
    return txt.length
}

// If you have a word with a dash is that one or two words, ex: x-ray
function getNumberOfWords(txt) {
    let count = 0
    var arr;

    var re = /([-A-Za-z0-9])+/g;

    while ((arr = re.exec(txt)) !== null) {
        count++;
    }
    return count
}

// What if you have a super long text that doesn't hit return but goes down into multiple lines
function getNumberOfLines(txt) {
    let count = 0
    var arr;

    var re = /([\n])/g;

    while ((arr = re.exec(txt)) !== null) {
        count++;
    }
    return count
}

function getAveWordLength(txt) {
    let count = 0
    let sum = 0
    var arr;

    var re = /([-A-Za-z0-9])+/g;

    while ((arr = re.exec(txt)) !== null) {
        sum+=arr[0].length
        count++;
    }
    return sum/count
}

