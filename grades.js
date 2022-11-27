

let marks=prompt("enter your marks");//prompt window to enter marks value

//grading function to evaluate different grades on range of marks given
function grading(){

if (marks<40){
    return ("your grade is: 'E'");
}
else if(marks>=40 && marks<=49){
    return "your grade is : 'D'";
}
else if(marks>=50 && marks<=59){
    return "your grade is :'C'";
}
else if(marks>=60 && marks<=79){
    return "your grade is : 'B'";
}
else if(marks>=80 && marks<=100){
    return "your grade is : 'A'";
}
else{
    return "invalid marks entry";
}


}
//function expression which calls grading() function to display the values in grading() in html page
const generator=()=>document.getElementById('grade').innerHTML=grading();