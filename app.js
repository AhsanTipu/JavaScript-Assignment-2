//============= Chapter 21-25
// Q1========================
// var a=prompt("Enter First Name");
// var b=prompt("Enter Last Name");
// var fullName=a+" "+b;
// alert("Wlcome Mr "+fullName);

// Q2========================
// var a=prompt("Enter Your Facourite Phone Name");
// document.write("My Favourite Phone is "+a+"<br>");
// document.write("Length of string "+a.length)

// Q3========================
// var s="Pakistani";
// var a=s.indexOf("n");
// document.write("String "+s);
// document.write("<br>"+"Index of n is "+a);

// Q4========================
// var s="Hello World";
// var a=s.lastIndexOf("l");
// document.write("String "+s);
// document.write("<br>"+" Last Index of l is "+a);

// Q5========================
// var s="Pakistani";
// var a=s.charAt(3)
// document.write("String "+s);
// document.write("<br>"+"Character at Index 3 is "+a);

// Q6=======================
// var a=prompt("Enter First Name");
// var b=prompt("Enter Last Name");
// alert("Wlcome Mr "+a+" "+b);

// Q7======================
// var city="Hyderabad"
// var new1=city.replace("Hyder","Islam");
// document.write("City "+city+"<br>");
// document.write("After Replacement "+new1);

// Q8=======================
// var message = "Ali and Sami are best friends. They play cricket and football together"
// var rep=message.replace(/and/g,"&");
// document.write(rep);

// Q9=======================
// var a="472";
// document.write("Value "+a+"<br>");
// document.write("Type : String"+"<br>");
// Number(a);
// document.write("Value "+a+"<br>");
// document.write("Type : Number"+"<br>");

// Q10======================
// var ui=prompt("Enter a String");
// var a =ui.toUpperCase();
// document.write("String "+ui+"<br>");
// document.write("UpperCase "+a);

// Q11=========================
// var ui=prompt("Enter a String");
// var a=ui.slice(0,1);
// var a1=a.toUpperCase();
// var b=ui.slice(1);
// var b1=b.toLowerCase();
// document.write("String "+ui+"<br>");
// document.write("Title Case "+a1+b1);


// Q12============================
// var num=35.36;
// var num0=num + " ";
//  num0=num0.replace(".","")
// var a=num0.toString();
// document.write("Number "+num+"<br>");
// document.write("String "+a);

// Q13============================
// var a=prompt("Enter your username");
// var b=a.charCodeAt();
// if(b == 33 || b==44 || b==46 || b==64 ){
//     alert("Please enter a valid Username");
// }
// else{
//     alert("login Successful")
// }

// Q14============================
// var arr=["cake","applepie","cookie","chips","patties"];
// var a=prompt("Welcome to ABC Bakery, What do you want to order Mam/Sir");
// var b=a.toLowerCase();

// for(var i=0;i<arr.length;i++){
//     if(arr[i] == b){
//         alert(b+" is available at index "+i); 
//     }

//     else{
//         alert('We are sorry, '+b+" is not available in our Bakery");
//         break;
//     }
// }

// Q15==============================
// var pass=prompt("Enter your Password");
// var z=pass.charCodeAt();
// var a=pass.charAt(0);
// var b=a.charCodeAt();
// document.write("Entered Password "+pass)
// if(b >=48 && b<= 56){
//     document.write("<br>"+"Password can't start with numbers");
//     document.write("<br>"+"Please enter a valid Password");
// }
// else if(pass.length <6){
// document.write("<br>"+"Password must contain 6 or more than 6 characters");
// document.write("<br>"+"Please enter a valid Password");
// }
// for(var i=0; i<= pass.length;i++){
//  if(i.z >65 && i.z <90){

// }
// }
// document.write("<br>"+"Password should contain alphabetss and numbers ");
// document.write("<br>"+"Please enter a valid Password");

// Q16==============================
// var str="University Of Karachi";
// var s=str.split(" ");
// var a=s.join(" ")
// for(var i=0;i<a.length;i++){
//     document.write(a.charAt(i)+"<br>");
// }

// Q17================================
// var a=prompt("Enter your Character");
// document.write("user Input "+a+"<br>")
// var b=a.charAt(a.length-1)
//     document.write("Last character of Input is "+b);


// Q18=================================
// var str="The quick brown fox jumps over the lazy dog";
// var s=str.toLowerCase();
// var count=s.match(/the/g).length;
// document.write("There are "+count+" occuerence(s) of word 'the");

// ===========CHAPTER 26-30====================

// Q1===============
// var num=prompt("Enter your Number in decimal");
// document.write("Number "+num+"<br>");
// document.write("Round Off "+Math.round(num)+"<br>");
// document.write("Ceil Off "+Math.ceil(num)+"<br>");
// document.write("Floor Value "+Math.floor(num)+"<br>");

// Q2==================
// var num=prompt("Enter your negative Number in decimal");
// document.write("Number "+num+"<br>");
// document.write("Round Off "+Math.round(num)+"<br>");
// document.write("Ceil Off "+Math.ceil(num)+"<br>");
// document.write("Floor Value "+Math.floor(num)+"<br>");

// // Q3====================
// var num=prompt("Enter a Number to gets it's Absoulute Number");
// document.write("Absolute number of "+num+" is "+Math.abs(num));

// Q4==========================
// var dice=Math.floor(Math.random()*6)+1
// document.write("Random Dice Value "+dice);

// // Q5==========================
// var dice=Math.floor(Math.random()*2)+1;

// if(dice==1){
//     document.write("1 <br>"+" Random Coin Value : Heads");
// }
// else{
//     document.write("2 <br>"+" Random Coin Value : Tails");
// }

// // Q6========================
// var random=Math.floor(Math.random()*100)+1;
// document.write("Random Number From 1 to 100 "+random);

// Q7============================
// var weight=prompt("Enter your weight in Kilograms");
// var we=parseFloat(weight);
// document.write("The Weight of user is "+we+" kilograms");

// Q8=============================
// var secret=Math.floor(Math.random()*10)+1;
// console.log(secret);
// var guess=prompt("Enter a number 1 to 10 ");
// if(guess==secret){
//     document.write("Congratulation! , You guessed right !")
// }
// else{
//     document.write("Better Luck Next Time");
// }

// ============CHAPTER 31-34
// // Q1================================
// var date=new Date();
// document.write(date)

// Q2=================================
// var arr=["Jamuary","Feb","Mar","April","May","june","july","August","Sep","Nov","Dec"]
// var date=new Date();
// var current=date.getMonth();
// alert(arr[current]);

// Q3================================
// var days=["Monday","Tuesday","Wednessday","Thursday","Friday","Saturday","Sunday"];
// var date=new Date();
// var dayt=date.getDay();
// var newa=days[dayt].slice(0,3);
// alert(newa);


// Q4====================================
// var days=["Monday","Tuesday","Wednessday","Thursday","Friday","Saturday","Sunday"];
// var d=new Date();
// var a=d.getDay();
// console.log(days[a])
// if(a== 5 || a==6){
//     alert("It's a fun days")
// }
// else{
//     alert("Go back to your work ")
// }

// // Q5=======================================
// var d=new Date();
// var a=d.getDate();
// console.log(a); 
// if(a>15){
//     alert("Last Days of Month")
// }
// else{
//     alert("First Fifteen Days of Month  ")
// }

// // Q6==================================
// var date=new Date();
// var datec=new Date("January 1,1970");
// console.log(datec);
// var mili=datec.getTime();
// var min=datec.getTime();
// document.write("Curretn Date : "+date+"<br>");
// document.write("Esplaed milisecond since January 1 1970 : "+mili+"<br>");
// document.write("Esplaed milisecond since January 1 1970 : "+min+"<br>");


// Q7=======================================
// var date=new Date();
// var h=date.getHours();
// console.log(h);
// if(h<12){
//     alert("It's AM")
// }
// else{
// alert("It's PM")
// }

// // Q8=======================================
// var laterdate=new Date("Dec 31,2020");
// document.write("Last Date of 2020 : "+laterdate);

// Q9==============================================
// var date=new Date();
// var da=date.getTime();
// var ram=new Date("April 25,2020");
// var dr=ram.getTime()
// var pst=date-ram;
// console.log(pst);
// var days=pst/(1000*60*60*24);
// console.log(Math.floor(days))
// document.write(Math.floor(days)+" has passed since 1st Ramazan 2020");

// Q10==============================================
// var d=new Date("May 23,2020");
// var a=d.getTime();
// document.write("On reference date "+d+"<br>");
// document.write(as+" has passed since begining of 2020")


// Q11===============================================
// var d=new Date();
// document.write("Current Date and Time "+d);
// d.setHours(2);
// document.write("<br>"+"1 hour ago "+d);

// Q12=======================================
// var d=new Date();
// alert("Current Date and Year "+d);
// d.setFullYear(1920);
// alert("100 years ago "+d)

// // Q13=======================================
// var d=new Date();
// var z=d.getFullYear();
// var a=prompt("Enter your age ");
// document.write("Age "+a);
// var x=parseInt(a);
// var i=parseInt(z);
// var year=z-a;
// document.write("<br>"+"Your Birth Year : "+year)

// // Q14===========================================
// var arr=["Jamuary","Feb","Mar","April","May","June","july","August","Sep","Nov","Dec"]
// document.write("<b>K Electric Bill </b> ");
// var d=new Date();
// var month=d.getMonth();
// var unit=410;
// var charges=16;
// var net=unit*charges;
// var gross=net+350;
// document.write("<br>"+"Custome Name : ABC Customer")
// document.write("<br>"+"Month : "+arr[month]);
// document.write("<br>"+"Charges per unit : "+charges);
// document.write("<br>"+"Net Amount Payable (with in due date) : "+net);
// document.write("<br>"+"Late Payment surccharge : <b>150</b> ");
// document.write("<br>"+"Gross Amount Payable (with in due date) : "+gross);




//============================ CHAPTER 35-38==========================================
// // Q1=====================
// function date(){
//     var d=new Date();
//     document.write(d);
// }
// date();

// // Q2=========================
// function greeting(greetf,greetl){
//     document.write('Welcome MR/Mrs '+greetf+" "+greetl);
// }
// greeting("Syed","Ahsan")

// Q3=============================
// var first=prompt("Enter first Number");
// var s=parseInt(first)
// var sec=prompt('Enter second Number');
// var s1=parseInt(sec)
// function sum(){
// var z=s+s1;
// return z;
// }
// var x=sum(s,s1);
// document.write("Sum Of "+s+" & "+s1+" is " +x )

// Q4============================
// var num1=prompt("Enter First Number ");
// var n1=parseInt(num1);
// var op=prompt("Enter Operation you want to Perform")
// var num2=prompt("Enter Second Number ");
// var n2=parseInt(num2);
// switch(op){
//     case "+":
// document.write("Sum Of "+n1+" & "+n2+" is " +(n1+n2) )
//     break;
//     case "-":
//         document.write("Sum Of "+n1+" & "+n2+" is " +(n1-n2) )
//             break;
//             case "*":
//                 document.write("Sum Of "+n1+" & "+n2+" is " +(n1*n2) )
//                     break;
//                     case "/":
//                         document.write("Sum Of "+n1+" & "+n2+" is " +(n1/n2) )
//                             break;
//                             default:
//                                 document.write("Operator not Found");
// }

// Q5=====================================
// var num=prompt("Enter a Number to gets it's Square")
// function Square(){
//     document.write("Square of "+num+" is "+(num*num))
// }
// Square();

// Q6==================================
// var num=prompt("Enter a number to get Factorial");
// var fact=1;

// function factorial(){
// for(var i=1;i<=num;i++){
//     fact=fact*i
// }
// document.write("Factorial of Given Number is "+fact);
// }
// factorial();


// Q7======================================
// var st=prompt("Enter Start Number of Counting");
// var lt=prompt("Enter Last Number of Counting");
// document.write("Counting from "+st+" to "+lt);
// document.write("<br>");
// function count(){
// for(var i=st;i<=lt;i++){
// document.write(i+"<br>");
// }    
// }
// count();

// Q8=====================================
// var a=prompt("Enter Base");
// var b=prompt("Enter Perpendicular");
// var x;
// var y;
// function calculateSquare(){
//     var a1=parseInt(a);
//     var b1=parseInt(b);
//      x=a1*a1;
//      y=b1*b1;
//     console.log(x);
//     console.log(y);
// }
// function calculateHypotenuse(){
// var hyp=x+y;
// console.log(hyp)
// var hypsq=Math.sqrt(hyp);
// document.write("Hypotenuse of Given Data is "+hypsq.toFixed(3));
    
// }
// calculateSquare();
// calculateHypotenuse();

// Q9=======================================
// i
// function area(width,height){
// var z=width*height;
// document.write("Area of Traingle is "+z)
// }
// area(4,5);

//ii
// var a=prompt("Enter Width")
// var b=prompt("Enter Height")
//  function area(width,height){
//     var z=width*height;
//     document.write("Area of Traingle is "+z)
//     }
//     area(a,b);
    
// Q10=======================================
// function palin(){
//     var a=prompt("Enter String to check if it's palindrone or not");
//     var c="";
//     for(var i=a.length-1;i>=0;i--){
//         c=c+a[i];
//     }
//     if(c==a){
//         alert("Given String is Palindrone")
//     }
//     else{
//         alert("Not palindrone")
//     }
// }
// palin();

// Q11========================================

// function up(){
//     var a=prompt("Enter your String");
//     var as=a.slice(0,1).toUpperCase();
//     var sa=a.slice(1).toLowerCase();
//     var comb=as+sa;
//     document.write(comb);
// }
// up();

// Q12=====================================
// function longest(){
//     var a=prompt("Enter your String");
//     var c=a.split(" ");
//     console.log(c);
//     var max=c[0];
//     for(var i=0;i<c.length;i++){
// if(max < c[i].length){
//     max=c[i];
//     console.log(max)
// }

//     }
//     document.write(max);
// }
// longest();

// Q13=================================
// var s=prompt("Enter your string");
// var l=prompt("Enter letter wwhose occurene you wanna check")

// function occur(str,letter){
//     document.write("String "+str+" \n "+"Letter : "+letter)
// document.write("\n "+"Occurence "+s.match(/l/g).length);
// }
// occur(s,l);

// Q14====================================
// var radius;
// var cs;
//  function calcCircumference(){
//      radius=prompt("Enter radius , use input insside function");
//      cs=2*3.14*radius;
//      document.write("The Circumference is "+cs.toFixed(3));
//  }
//  function calcArea(){
// var area =3.14*radius*radius;
// document.write("<br>"+'The Area is '+area.toFixed(3));
//  }
//  calcCircumference()
//  calcArea();