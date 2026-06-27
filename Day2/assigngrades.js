function calculateGrade(score) {
     switch (true) {
        case (score >= 90):
            console.log("Grade: A");
            break;
        case (score >= 75 && score < 90):
            console.log("Grade: B");
            break;
        case (score >= 40 && score < 75):
            console.log("Grade: C");
            break;
        case (score >= 0 && score < 40):
            console.log("Grade: D");
            break;
        default:
            console.log("Invalid score");
    }
}
calculateGrade(-4) 
