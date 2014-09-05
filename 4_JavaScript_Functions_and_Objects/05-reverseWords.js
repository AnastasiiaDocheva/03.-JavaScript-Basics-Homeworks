function reverseWordsInString(str) {
    var result = "";
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        result += words[i].split("").reverse().join("") + " ";
    }
    return result.trim(); // The trim() method removes whitespace from both sides of a string.
}
console.log(reverseWordsInString("Hello, how are you."));
console.log(reverseWordsInString("Life is pretty good isn’t it?"));