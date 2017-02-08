//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    let nChars = getNumberOfChars(txt)
    let nWords = getNumberOfWords(txt)

    return {
        nChars: nChars,
        nWords: nWords,
        nLines: 10,
        nNonEmptyLines: 22,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}

function getNumberOfChars(txt) {
    return txt.length
}

function getNumberOfWords(txt) {
    let count = 0
    var arr;

    var re = /([-A-Za-z0-9])+/g;

    while ((arr = re.exec(txt)) !== null) {
        count++;
    }
    return count
}