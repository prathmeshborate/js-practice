const accountId = 123456
let accountEmail = "prathmeshborate01@gmail.com"
var accountPassword = "Pra@3051"
accountCity = "Mumbai"
let accountState

// accountId = 789456 not allowed

accountEmail = "prath@gmail.com"
accountPassword = "Prath001"
accountCity = "Vashi"

/*
never use var 
to avoide block scope and functional scope problem
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])