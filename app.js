/// variables :: (mutable)

// let firstName = "ali"  //// data types : string , number , boolean 

// firstName  = "mohamed"

// console.log(firstName)


/// constant : 

// const age = 20 ;        //(immutable)
// age = 25 ;
// console.log(typeof age)



// let now = 2025 ; 


///// dry : d'ont repeat yourself ::
// const maxAge = now - 1992 ;
// const aliAge = now - 1998 ;

// console.log("max:" , maxAge , "ali:" , aliAge)



// let x = 5 + 3   /// 8



// x = x + 10 
// x+=10
// console.log(x)


// let y = 10 

// y = y - 5 

// y-=5
// console.log(y)


// let z = 10 

// z = z * 2 

// z*=2
// console.log(z)




//// icrement ::


// let a = 1 ; 
// // a = a + 1 
// a++
// a++
// a++
// a++

// console.log(a)

//// decrement :: 

// let b = 10 ; 


// b--
// b--
// b--
// console.log(b)  


/////// operators > ; < ; >= ; <=

// let now = 2025 ; 


// const maxYearofBirth = 1993 ; 
// const peterYearofBirth = 1993 ; 


// const age1 = now - maxYearofBirth 
// const age2 = now - peterYearofBirth 

// console.log("max:" ,  age1 , "peter:" , age2 )

// console.log(age2 >= age1)


///// concatination :  

// let firstName = "jhon" ; 
// let lastName = "breed" ; 
// let now = 2025 ; 
// let bearthYear = 1995 ; 
// let job = "full stack web developper"


// let information = "i'm"+" "+firstName+" "+lastName+" "+"i'm"+" "+(now-bearthYear)+" "+"years old"+" "+"i work as a"+" "+job 
// console.log(information)

//// template leterale (after es6) :: 

// let information = `i'm ${firstName} ${lastName} i'm ${now-bearthYear} years old i work as a ${job} `

// console.log(information)


///// multiple lines ::  (before es6)
// let sentence = "ay haja \n second word \n third word"
// console.log(sentence)
//// (after es6)
//  let sentence = `ay haja  
//  second word  
//  third word`
//  console.log(sentence)


///// desecions ::: (if and else statement)


// const age = 10
// if (age > 16 )  {
//     console.log("age over 16")
// }

// else if (age > 19) {
//     console.log("age over 19 ")
// }


// else if (age > 24){
//  console.log("age over 20")
// }

// else {
//     console.log("age under 16 ... ")
// }


////// conversion ::: 
// let year = "2000"  //// 2000 // 2010 /// error ///

// console.log(typeof year)

// const result1 = year + 10 ;
// console.log( "before conversion :" ,  result1)

// console.log(typeof year)

// console.log(typeof Number(year))

// const result2 = Number(year) + 10
// console.log(result2)

///// coersion (-)
// let test = 10 

// console.log( test  + 5)  /// 15

// console.log( String(test) + 5)  //105


////// paly guess the number


// let n = "1" + 1   // 11 //10
// console.log(n)

// n-=1
// console.log(n)

let y = "hello"+"2"+"10"-"6"  /// 
console.log(y)









