
//STEP 1
/*  
Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

Sample Data and Output
Example string: 'webmaster'
Expected Output: 'abeemrstw'
*/

function alphabetize(aString){
    //convert to array so we can sort and convert back to string
    aString = aString.split('')
    alert('String in alphabetical order is: '+ aString.sort().join(''))
}

alphabetize("webmaster")


//STEP 2
/* 
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.

Sample Data and Output
Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox'

*/

function titleCaseString(aString){
    //convert to array, capitalize each element using map function to address each word, the join into a string
    aString = aString.split(' ')
                .map((str)=>str.charAt(0).toUpperCase()+str.slice(1))
                .join(' ')
    alert('String in title case is: '+ aString)

}

titleCaseString("the quick brown fox")


//STEP 3
/* Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

Sample Data and Output
Example string: 'The quick brown fox'
Expected Output: 5 
*/

function countVowels(aString){
    //use regular expression and brackets to match the vowels. use global search modifier. It retruns array of matching values and then count the length of that array
    alert('The string has ' + aString.match(/[aeiou]/g).length + ' vowels.')
}
countVowels('The quick brown fox')


//STEP 4
/*
Write a JavaScript function that generates a string id (specified length) of random characters. 8 characters

Sample Data and Output
Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
*/
function randomString(){
   
    //use Array es6 method to create array of 26 elements, use map function to change their value to match a ascii value,  map ascii values array and get string equivalent usng String method fromCharCode to generate array of alphabets
    //alternate is to hardcode the array of alphabets
    const letters = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabets = letters.map((x) => String.fromCharCode(x))
    let randString =[];

    //loop eight times
        //generate random case, 0-lower, 1-upper
        //generate random letter index between 1-26
        //find alphabet value in alphabets array
        //apply case to alphabet
        //push to randString
    
    for (let i=0; i<8; i++){
        let randomCase = Math.floor(Math.random() * 2)
        let indexRandomLetter = Math.floor(Math.random() * 26)
        // console.log('random case' + randomCase + 'and random letter ' + randomLetter)
        let alphabet = alphabets[indexRandomLetter]
        let rlet = randomCase === 0 ? alphabet.toLowerCase() : alphabet.toUpperCase()
        randString.push(rlet)
    }
    //join the array and convert to string using join()
    randString = randString.join('')
    // console.log(letters)
    // console.log(alphabets)
    alert('Random string is: '+ randString)

}
randomString()


//STEP 5
/*
Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

Sample Data and Output
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America" */

//accept input as array of country names
//use map function to return length of each value
//find max value and its corresponding index
//find value in country array for above index 

function longestCountryName(cName){
    const cLength = cName.map((country) => country.length)
    console.log(cLength)
    //use spread syntax of function.prototype.apply() method.
    let maxLength = Math.max(...cLength)
    let mlIndex = cLength.indexOf(maxLength)
    let longName = cName[mlIndex]
    alert('Longest country name in list is: ' + longName)
}

longestCountryName(["Australia", "Germany", "United States of America"])
