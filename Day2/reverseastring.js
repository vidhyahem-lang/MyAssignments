let result1
let test1 
function reversestring(test) {
 // result = test.split("").reverse().join("");
 let result = [] 
 result1 =""
 result = test.split("")
let no = result.length
//console.log("result is ", no);
for (let i = no-1; i >=0; i--) {
  //console.log(result[i]);
   result1 =result1+result[i]
   test1 = test
}
console.log("result is ", result1);
}
function checkpalindrome(result1, test){
console.log("result is ", result1);
if (result1 == test) {
  console.log("result is ", result1);
  console.log("result is ", test);
  console.log("Given string is palindrome");

} else {
    console.log("result is ", result1);
  console.log("result is ", test);
  console.log("Given string is not palindrome");
}}
reversestring("madam")
checkpalindrome(result1, test1)