//JavaScript program to compute the sum of the two given integers. If the sum is in the range 50-80 return 65 otherwise return 80.

// Declaring and defining the function
function sum(num1,num2){

    // Checking if the sum is in the range 50-80 
    if(num1+num2>=50 && num1+num2<=80){
        return 65;
    }
    else{
        return 80;
    }
}
// calling the function and displaying its output
console.log(sum(10,19));
console.log(sum(10,50));