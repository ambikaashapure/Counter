// Decalring the constants.
const text1 = "WebDevelopment"
const text2 = "ReactJS Developer"
//function that will return the number of words in a text
function wordCounter(text) {
    //appointing for loop to iterate through text
    for (var i in text) {
        if (text1[i] = true) {
            i++;
        }
    }
    console.log(`Numbers of letters in ${text} is ${i}`);
}
//calling the wordCount Function
wordCounter(text1);
wordCounter(text2);
