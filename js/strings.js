//STEP 1
let userName = prompt("Enter your name:")
alert(`Your name has ${userName.length}characters`)

//STEP 2
// let userName = prompt("Enter your name:")
// let choice = parseInt(prompt(`Enter a number to pick a letter in your name(between (1 and ${userName.length}) (Ex:5 for 5th letter):`))
// alert(`${choice} letter in your name is ${userName.charAt(choice)}`)

//STEP 3
// let fName = prompt("Enter your first name:")
// let lName = prompt("Enter your last name:"), fullName = ''

// fullName = fullName.concat('Your name is: ',fName,' ',lName)
// alert(fullName)


//STEP 4
// let text = "The quick brown fox jumps over the lazy dog"
// alert("The index of the word fox is: " +  text.indexOf('fox'))

//STEP 5
// let text = "The quick brown fox jumps over the lazy fox"
// alert("The index of the last occurence of word fox is: " +  text.lastIndexOf('fox'))

//STEP 6
// let text = "The quick brown fox jumped over the lazy dog"
// let fName = prompt("Enter your full name:")
// alert("The new saying is : " +  text.replace('the lazy dog',fName))

//STEP 7
// let text = "The quick brown fox jumps over the lazy dog"
// let aWord = prompt("Enter any word:")
// //use ternary operator
// text.search(aWord) !== -1 ? alert('The word, '+ aWord + ', you entered is at position '+ text.search(aWord)) : alert('The word, '+ aWord + ',  you entered does not exist in the string.')

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog"
// let new_string = old_string.slice(old_string.indexOf('the lazy dog'))
// alert(new_string.toUpperCase())

//STEP 9
// let text = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
// alert(text.trim().toLowerCase())

//STEP 10
// let text = "the quick brown fox jumps over the lazy dog"
// alert(text.charAt(0).toUpperCase() + text.slice(1))
