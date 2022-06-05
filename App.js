// var a = "mani"

// var b = 125

// var c = "125"

// console.log (a+b+c)


// alert ("hello world!");

// var a = 5
// var b = 10

// alert (a+b)
// alert (b-a)
// alert (a*b)


// var num = 7
// var num2 = 10

// var add = num+num2

// var sub = num2-num

// var multi = num1*num2

// var divide = num2/num1

// alert ("this is addition" + " " + add)
// alert ("this is subtraxtion" + " " + sub)
// alert ("this is Multipliccation" + " " + multi)
// alert ("this is division" + " " + divide)

// var mix = num+3 + num2 - num1 + (num*num1)

//             10 + 10 - 5 + 35//

// alert (mix)            


// var num1 = 5

// var a = num1++ + num1++ + ++num1 - num1 + --num1 - num1-- + num1++ - num1-- - ++num1 + num1

// //       5     +    6   +    8   -  8   +    7    -  7    +   6    -   7   -     7    +  7

// alert (a)



// var n = 2

// var total = n++ + n-- + n + --n - --n + n++ + ++n + --n - n++ - n + n - ++n - --n

//         //  2   +  3  + 2 +  1  -  0  +  0  +  2  +  1  -  1  - 2 + 2 -  3  -  2

// alert (total)




// var user = +prompt("enter your key")

// if (user !== 8877){

//     alert ("welcome to your dashboard")

// }
// else {
//     alert ("invalid key")
// }

// var country = prompt("enter your country name")

// var province = prompt("Enter your province")

// // var education = ("Education")

// var weight = +prompt("enter your weight")

// var gender = prompt("enter your gender")

// if (country == "pakistan" && province == "sindh" && gender == "male" && weight >= 60 && weight <= 70 ){

//     alert ("you are allowed to ride")
// }
// else {
//     alert ("you are not allowed to ride")
// }



// var age = +prompt("enter your age")

// var weight = prompt("enter your weight")

// var country = prompt("enter your country")

// var city = prompt("Enter your city")

// if (age >= 20 && weight >= 50 && (country == "pakistan" || city == "karachi")){

//     alert ("you are allowed to ride")

// }
// else {
//     alert ("you are not allowed to ride")
// }




// var name1 = "amir"
// var name2 = "kashif"
// var name3 = "bilal"
// var name4 = "zubair"
// var name5 = "imran"

// console.log (name1)


// var arr = ["amir","imran","kashif","ali","pakistan",3342849423]

// arr.pop()
// // arr.push(03342978864,03353038265,"kasmflakmf","dksfkl","kljnscvfkl","dksmfjs")

// // arr.shift()

// arr.unshift("mani","hasan")


// // arr.splice(1,4)

// var arr1 = arr.slice(2,5)

//  console.log (arr)
//  console.log (arr1[1])

// for (var i = 0; i <= 10; i++){
//     if (i === 5){
        
//         // break
        
//     }
//     alert ("mani 5 dafa")
//     // alert ("hello world")
// }

// var a = prompt("enter your value")

// var arr = ["mani","adeel","usman","imran"]

// for (var i = 0; i <= arr.length; i++){
//     if (a === "usman"){
//         alert ("same person")
//         break
//     }else if (a === "imran"){
//         alert ("brother")
//         break
//     }else if (a === "adeel"){
//         alert ("Friend")
//         break
//     }else {
//         alert("not a correct value")
//         break
//     }
// }


// for (var i = 0; i < 10; i++){
//     for (var j = 0; j < 5; j++){

//         console.log ("hello world")
        

//     }

// }



// var a = prompt("enter your name")

// var b = a.toLowerCase()


// if (b === "mani"){
//     alert ("congratzzzzzzzz")
// }



// var name = "usman"

// var korrctor = name.slice(1,3)

// console.log (korrctor)


// var text = "if u are free so eva den suddenly rep me"

// console.log (text)


// for (i = 0; i < text.length; i++){
//     if (text.slice(i, i + 3) === "rep"){
//         text = text.slice (0,i) + "reply" + text.slice(i + 3)

//         console.log(text)
//     }
// }


// var text = "if u are free so eva den suddenly rep me"

// var b = text.indexOf("rep")

// // console.log(b)

// if (text !== -1){
    //     text = text.slice(0,b) + "reply" + text.slice(b + 3)
    //     console.log(text)
    // }
    
// var name = "usman"

// var firstChar = name.charAt(3)

// // console.log (firstChar)

// for (var i= 0; i < name.length; i++){
    //     if (firstChar === "m"){
        //         alert ("m wala word found")
//         break
//     }else {
//         alert ("m wala word not found")
//     }
//     break
// }




// var text = "if u are free so eva den suddenly rep me"

// var b = text.replace("rep","reply")

// console.log(b)


// var num = 1

// var round =  Math.random(num)

// console.log (round)

// var num = 1.9

// var num2 = num.toString(num)

// console.log(num2)


// var a = "15"

// var b = a.parseInt(64)

// console.log (b)




// var b = 2;
// var a = Math.random()
// var c = a.toFixed(3)
// console.log(c)


// var date = 



// var days = ["sun",'mon',"tues",'wed','']

// var now = new Date()

// var day = now.getMonth ()

// console.log (day)



// var dob = new Date (prompt("enter your date of birth" , "march 11, 1995 (please input in this style)"))

// var dobmili = dob.getTime()

// var today = new Date()

// var todaymili = today.getTime ()

// var diff = todaymili - dobmili

// var age = Math.floor(diff/(1000*60*60*24*30*12))

// alert (age)




// var dob = new Date (prompt("enter your date of birth"))

// var dobmili = dob.getTime()

// var today = new Date()

// var todaymili = today.getTime()

// var diffrence = todaymili - dobmili

// var age = Math.floor(diffrence/(1000*60*60*24*30*12))

// console.log (age)




// var now = new Date ();

// var b = now.getFullYear()

// var a = b.setFullYear("2011");

// console.log (b)


// var a = new Date ()

// a.setFullYear(2001)

// console.log (a)


// var a = "15";

// var b = a.parseInt(64)

// console.log (a)



// function foo (a,b,c){

//     return a+b+c

// }

// alert (foo(4,5,6))

// var a = 2

// var b = 4


// function foo (){

//     return a + b

    
// }

// alert (foo())

// var a = prompt ("enter your answer")





// switch (a) {
//     case "mani":
//         alert ("same person");
//         break
//     case "adeel":
//         alert ("friend")
//         break
//     case "imran":
//         alert ("brother")
//         break
//     default:
//          alert ("incorrect answer")    
// }


// var i = 0;
// while (i <= 10){
//     alert ("hello")
//     i++
// }

// var a = prompt ("enter your answer")

// var arr = ["mani","adeel","imran"]

// var i = 0
// while (i < arr.length){
//         if (a == arr[i]){
//         alert ("same person")
//     }
//         i++
// }

// var a = prompt("enter your answer")

// var arr = ["mani","adeel","kami"]

// for (var i = 0; i < arr.length; i++)

// if (a == arr[i]){
//     alert ("same person")
// }

// var i = 0
// do {
//     alert ("hello")
//     i++

// } while (i < 5)


// var p = prompt ()

// var arr = ["mani", "imran","kami"]

// var i = 0
// do {
//     if (p ==  arr[i]){
//         alert ("same person")
//         break

//     }else if (p == arr[i]){
//         alert ("brother")

//     }else {
//         alert ("friend")
//     }
//     i++
// } while (i < arr.length)



// function mani (){
//     alert ("usman")
// }

// function foo (){
//     var a = document.getElementById("chk")

//     console.log (a.value)
    
//     a.value = " "



// }



function btn(num){
    // console.log (num)
    var inp = document.getElementById("result")
    inp.value += num
    
}

function clr(){
    var inp = document.getElementById("result")
    inp.value = " "
    
}

function result(){
    var inp = document.getElementById("result")
    inp.value = eval(inp.value)
}























































































































































































































































































