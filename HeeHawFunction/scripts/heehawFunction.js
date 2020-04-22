/*
    Filename and path:         https://chrogers.greenriverdev.com/328/HeeHawFunction/scripts/heehawFunction.js
    Author:                    Corey Rogers
    Date submitted (v1.0):     04/22/2020
    Assignment:                JS 3: Chapter 3 - Hee Haw Function
    Description:               Takes a number as an input and prints the numbers from 1 to that number.
                               Prints "Hee!" instead of the number for any number evenly divisible by 3,
                               "Haw!" instead of the number for any number evenly divisible by 5, and "Hee
                               Haw!" instead of the number for any number evenly divisible by both 3 and 5.
 */


//create a constant variable for the heehaw button
const heehawButton = document.getElementById("heehawButton");

//validate the user's number when the button is clicked
heehawButton.onclick = formValidate;


//checks to see if the user entered a valid number
// if number is a valid number, then heeHaw() function is called using the number
// as a parameter, otherwise an error message is displayed
function formValidate(){

    // Clear all errors
    let error = document.getElementById("errNumber");
    error.style.visibility = "hidden";

    //get the user's number from the text input field
    let userNumber = parseInt(document.getElementById("userNumber").value);

    //run heeHaw() function if userNumber is a valid number, else
    // show an error message
    if (!isNaN(userNumber)) {
        heeHaw(userNumber);
    }
    else {
        error.style.visibility = "visible";
    }

}


//Takes a number as a parameter and prints the numbers from 1 to that number,
// using the logic in the description at the top of this file.
function heeHaw(maxNumber) {
    //select the element where the numbers will be displayed
    const printField = document.getElementById("printField");

    //clear anything that is currently inside the element
    printField.innerHTML = "";

    //loop through the numbers and display the correct number/text for each number
    for (let i = 1; i <= maxNumber; i++) {
        let value;
        if (((i % 3) === 0) && ((i % 5) === 0)) {
            value = "Hee Haw!";
        }
        else if ((i % 3) === 0) {
            value = "Hee!";
        }
        else if ((i % 5) === 0) {
            value = "Haw!";
        }
        else {
            value = i;
        }

        printField.innerHTML = printField.innerHTML + value + "<br>";

    }

}
