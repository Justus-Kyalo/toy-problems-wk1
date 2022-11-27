
//this is an event listner for click which onclick calls function detector()
document.getElementById('myBtn').addEventListener('click' ,()=>detector()); 

//function detector to calculate demerit points and print warnings in text form
function detector(){
    let speed=document.getElementById('myInput').value; //obtains speed value from input with id myInput using DOMs
    
let points=(speed-70)/5;//calculates speed points as each point 5km and 70 is the max allowed speed
if (points<=0){
    return  document.getElementById('display').innerHTML="OK" ;
}
else if(points<12 && points>0){

    return document.getElementById('display').innerHTML= `POINTS:${Math.floor(points)}`;
}
else  if(points>=12){

    return document.getElementById('display').innerHTML= 'License Suspended';
}
    
}


