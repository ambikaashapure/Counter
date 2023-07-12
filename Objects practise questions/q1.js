var student = { name: "Jocob", class: "VI", rollno: 12 };

// to list the properties of a JavaScript object. 
function property(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            console.log(i);
        }
    }
}
property(student);

//to delete the rollno property from the following object.
//before deletion
console.log(student);

//after deletion
delete student.rollno;
console.log(student);

// to get the length of a object 
let length = 0
for (var i in student) {
    if (Object.keys(i)) {
        length = length + 1;
    }
}
console.log(length)

//to print both keys and values
console.log("keys are : ", Object.keys(student));
console.log("values are : ", Object.values(student));

//program to add phone number and address
student.phoneNumber = 987621;
student.address = "asb 213";
console.log(student)
