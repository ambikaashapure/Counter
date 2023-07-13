const string = "Create a function to return the longest word in a string;"
var max = 0;
// function to find longest word in the string
function longestWord(str) {
    // to convert string into array
    const arr = str.split(" ");

    // loop to find the length of the longest word among all the words of array
    for (var i in arr) {
        if (arr[i].length > max) {
            max = arr[i].length
        }
    }
    // loop to find out the value of the longest word
    for (var j in arr) {
        if (arr[j].length == max) {
            return arr[j];
        }
    }
}

console.log(`The Longest word in the string is '${longestWord(string)}' with ${max} characters.`);
