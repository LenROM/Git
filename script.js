function doGrades() {
    var name = document.getElementById("name").value;
    var grd1 = parseInt(document.getElementById("grd1").value);
    var grd2 = parseInt(document.getElementById("grd2").value);

    var result = document.getElementById("result");


    var avg = (grd1 + grd2) / 2;
    var letterGrade; //= "Not Yet Implemented";

    if ((avg >= 0) && (avg <= 50)) { // Prints out the score "D" when average grade is from 0 to 50
        letterGrade = "D";

    } else if ((avg > 50) && (avg <= 60)) { // Prints out the score "C" when average grade is from 51 to 60
        letterGrade = "C";

    } else if ((avg > 60) && (avg <= 70)) { // Prints out the score "B" when average grade is from 61 to 70
        letterGrade = "B";

    } else if ((avg > 70) && (avg <= 90)) { // Prints out the score "A" when average grade is from 71 to 90
        letterGrade = "A";
    } else if (avg > 90) {
        letterGrade = "A+"; // Prints out the score "A+" when average grade is from 90 to 100
    }
    result.innerHTML = "<center>Name: " + name + "</center>" + "<br/>" + "<center>Average: " + avg + "</center>" + "<br/>" + "<center>Score: " + letterGrade + "</center>";
} //the result above Prints out the given: Name:, Average: and Score: 

/** 
 * 0 to 50 = D
 * 
 * 51 to 60 = C
 * 
 * 61 to 70 = B
 * 
 * 71 to 90 = A
 * 
 * > 90 = A+
 * 
 */