



let basicSalary =prompt("enter basic salary") ;//prompt window to enter basic salary
let benefits =prompt("enter benefits");//prompt window to enter benefits
let grossSalary=parseInt(basicSalary)+ parseInt(benefits);//calculation of grosssalry with benefits and basicsalary passsed to parseInt to convert them to numbers since they strings
let netSalary=grossSalary-(paye())-nhif()-nssf();


//this is paye function to calculate PAYE using percentage rates 0.1,0.25,0.3
   function paye(){
    
    if(grossSalary<=288000){
        return  ( 0.1*grossSalary);
    }
    else if(grossSalary>288000 && grossSalary<=388000){
        return (0.25*grossSalary);
    }
      else if(grossSalary>388000){
        return (0.3*grossSalary);
      }




   }

//this is a function containing if else statements returning the values of nhif amount based on given grosssalary range

   function nhif(){
    if(grossSalary<=5999){
      return 150;
    }
    else if(grossSalary>5999 && grossSalary<=7999){
      return 300;
    }
    else if(grossSalary>7999 && grossSalary<=11999){
      return 400;
    }
    else if(grossSalary>11999 && grossSalary<=14999){
      return 500;
    }
    else if(grossSalary>14999 && grossSalary<=19999){
      return 600;
    }
    else if(grossSalary>19999 && grossSalary<=24999){
      return 750;
    }
    else if(grossSalary>24999 && grossSalary<=29999){
      return 850;
    }
    else if(grossSalary>29999 && grossSalary <=34999){
      return 900;
    }
    else if(grossSalary>34999 && grossSalary<=39999){
      return 950
    }
    else if(grossSalary>39999 && grossSalary<=44999){
      return 1000;
    }
    else if(grossSalary>44999 && grossSalary<=49999)
    {
      return 1100;
    }
    else if(grossSalary>49999 && grossSalary<=59999){
      return 1200;
    }
    else if(grossSalary>59999 && grossSalary<=69999){
      return 1300;
    }
    else if(grossSalary>69999 && grossSalary<=79999){
      return 1400;
    }
    else if(grossSalary>79999 && grossSalary<=89999){
      return 1500;
    }
    else if (grossSalary>89999 && grossSalary<=99999){
      return 1600;
    }
    else if(grossSalary>100000 ){
      return 1700;
    }

         
      
  
    }


    //this is a function nssf to calculate nssf based on grossSalary ranges

   function nssf(){
     
    if(grossSalary<=3000){
      return 180;
    }
    else if(grossSalary>3000 && grossSalary<=4500){
      return 270;
    }
    else if(grossSalary>4500){
      return 360;
    }
 
  }
  //this is a function that calls the other function for paye,nssf,nhif and values to grossSalary & netsalary to be returned after calculation
  function calculator(){
    return `grossSalary:${grossSalary};   netSalary:${netSalary} ;  PAYE:${paye()} ; NHIF:${nhif()} ;NSSF:${nssf()}`;
  }
   

//this is a function expression which when clicked on html page displays element elements of calculator
const calculate=()=>document.getElementById('calc').innerHTML=calculator(); 

