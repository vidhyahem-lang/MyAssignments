const genderType ="female"
function printGender(){
    var age = 30
    let color="brown"
    if (genderType.startsWith("female")) {
       var age = 31
       let color = "pink" 
       console.log("color printer is ", color);
        console.log("age is ", age);
    }
    
    console.log("color printer is ", color); //explanation: let is Block scoped 
    console.log("age is ", age); //explanation: var is not block scoped 
}
printGender()
console.log("Outside function:", genderType);
//console.log("age is ", age); //explanation: var is function scoped 
//console.log("color printer is ", color); //explanation: let is function scoped 

