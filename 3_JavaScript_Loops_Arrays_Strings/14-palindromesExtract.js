function findPalindromes(input) {
    var result = [];
    var words = input.toLowerCase().match(/\w+/g); // (\w+) match one or more "word characters"
    for (var i = 0; i < words.length; i++) {		// g - case-sensitive search
        var current = words[i];
        var isPalindrome = true;
        for (var j = 0; j < current.length; j++) {
            if (current[j] !== current[current.length - 1 - j]) {
                isPalindrome = false;
            }
        }
        if (isPalindrome) {
            result.push(current);
        }
    }
    return result;
}
console.log(findPalindromes('There is a man, his name was Bob.'));