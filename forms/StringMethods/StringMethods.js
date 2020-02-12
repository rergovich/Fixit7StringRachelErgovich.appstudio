var quoteString = 'Failure is simply the opportunity to begin again this time more intelligently.'

var upperCaseString = quoteString.toUpperCase();
console.log(`Upper case string is: ${upperCaseString}`)

var authorString = '-Henry Ford'

var completeString = quoteString.concat(authorString)
console.log(`The string in quoteString is: ${completeString}`)

var secondQuote = 'Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King'

var lowerCaseString = secondQuote.toLowerCase()
console.log(`Lower case string is: ${lowerCaseString}`)

console.log(`The character at location 3 is ${lowerCaseString.charAt(3)}.`)

var findString = secondQuote.slice(35, 120);

console.log(findString)