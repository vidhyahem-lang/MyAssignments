function launchBrowser(browserName){
    if (browserName= 'Chrome') {
        console.log("browser is chrome");      
        
    }else
         console.log("browser is otherwise");      

}
function runTests(testType){
switch (testType) {
    case 'sanity':
        console.log("sanity test is running")
        break
    case 'regression':
        console.log("regression test is running")
        break
    case 'smoke':
        console.log("smoke test is running")
        break
    default:
        console.log("no test is running")
        break
}}

launchBrowser('Chrome')
runTests('')