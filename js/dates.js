//STEP 1
// Create an application that gets the number of days in a month. Display that result within the console window.

let month30=['March','April','June','September','November']
let month31=['January','March','May','July','August','October','December']
let monthfeb= 'Febuary'

let monthName = prompt("Enter name of month (January - December)to get number of days in it: ")
if(month30.indexOf(monthName) !== -1){
     console.log(`${monthName} has 30 days.`)
} else if(month31.indexOf(monthName) !== -1){
    console.log(`${monthName} has 31 days.`)
}else{
    console.log(`${monthName} has 28 days in a normal year and 29 days in a leap year.`)
}



//STEP 2
// Create an application that gets the month name from a particular date. Display that result within the console window.
/*
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let inputDate = new Date(prompt('Enter a date in mm/dd/yyyy format to get month name:'))
let monthNum = inputDate.getMonth() //returns between 0-11
// console.log(`You entered date : ${inputDate.toDateString()}`)
console.log(`You entered month : ${month[monthNum]}`)

*/


//STEP 3
// Create an application that tests whether a date is a weekend. Display that result within the console window.
//date will be a weekend if day as returned by getDay is saturday(6) or sunday(0). getDAy returns 0-6 0-Sunday
/*
let inputDate = new Date(prompt('Enter a date in mm/dd/yyyy format to know if it is a weekend day:'))
let dayNum = inputDate.getDay() //returns between 0-6
if (dayNum != 0 && dayNum != 6){
    console.log(`It is not a weekend.`)
}else if(dayNum === 0){
    console.log(`It is a Sunday on the weekend.`)
}else if(dayNum === 6){
    console.log(`It is a Saturday on the weekend.`)
}
*/

//STEP 4
// Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
/*
const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let currentDate = new Date()
// let currentDate = new Date(prompt('Enter a date in mm/dd/yyyy :'))
let curDay = currentDate.getDay()
//set curday to 7 if its 0 as previous day willbe day 6. it cannot be -1
if (curDay === 0 ){
    curDay = 7
}
console.log(` Yesterday was a ${daysOfWeek[curDay - 1]}`)

*/

//STEP 5
// Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.

/*
let curDay = new Date().toDateString()
console.log(`Current day starts with a ${curDay.slice(0,1)}`)
*/


