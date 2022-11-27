# Week 1 Toy problems 

# Prerequisites: 

1. Create a repository on your GitHub account. 

NB: One folder, with 3-4 files for each solution. Please note that a single file should only hold one solution.

2. Use JavaScript to wire down the solution.

3. Push the solution to the above repository once done.

4. Submit the repository link for grading.

5. Ensure your repository has a well written README.



# Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


# instructions challenge 1
create index.html and grades.js file
on index.html create a paragraph with id ="grade"
also create a button which onclick calls a js function generator() to generate results


on your js file create a prompt for marks by first declaring marks
 create a function grading() with an if statements to grade marrks based on range  'A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.'

 create the generator function which onclick displays grade


 
# Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

    For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

# instructions challenge 2
create files speed.html and speedDetector.js
create  an button inside html file with id myBtn to trigger function detector inside js when called.
create  input element to allow to enter speed value on html page


create  function detector()  with if else statements to define warning returned based on points caculated.

create eventListener to call detector() when button with id myBtn gets clicked on html page


# Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm

Links to an external site.

Links to an external site.-  Links to an external site.

Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

# instructions challenge 3

create salary .html file and salaryCalculator.js 
inside js file prompt basic salary entry and benefits entry;
create a paye,nhif,nssf function to calculate each
create culculator function which when called returns values of paye ,nssf,nhif, netsalary,gross salary

