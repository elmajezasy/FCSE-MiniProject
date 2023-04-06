function triangle_area() {
    // Get the value of the input fields (area of triangle)
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);

    // Perform Calculation
    const result = 0.5 * base * height;

    //Display result in HTML element
    document.getElementById("result-of-triangle-area").textContent = result;
;
return false;
;
}

function reset(){
    // Reset
    document.getElementById("triangle_area").reset();
}

function triangle_circle() {
    // Get the Value of the input fields (circle of triangle)
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);

    // Perform Calculation
    const result = sideA + sideB + sideC;

    // Display result in HTML element
    document.getElementById("result-of-triangle-circle").textContent = result;
;
return false;
;
}

function reset(){
    // Reset
    document.getElementById("triangle_circle").reset
}

function parallelogram_area() {
    // Get the Value of the input fields (area of parallelogram)
    const baseP = parseFloat(document.getElementById("baseP").value);
    const heightP = parseFloat(document.getElementById("heightP").value);

    // Perform Calculation
    const result = baseP * heightP;

    // Display result in HTML element
    document.getElementById("result-of-parallelogram-area").textContent = result;
;
return false;
;
}

function reset(){
    // Reset
    document.getElementById("parallelogram_circle").reset();
}

function parallelogram_circle() {
    //Get the Value of the inputs fields (circle of parallelogram)
    const sideAP = parseFloat(document.getElementById("sideAP").value);
    const sideBP = parseFloat(document.getElementById("sideBP").value);

    // Perform Calculation
    const result = 2 * (sideAP + sideBP);

    // Display result in HTML element
    document.getElementById("result-of-parallelogram-circle").textContent = result;
;
return false;
;
}

function reset(){
    // Reset
    document.getElementById("parallelogram_circle").reset();
}
