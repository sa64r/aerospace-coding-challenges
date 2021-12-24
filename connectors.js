const numberOfProblems = 3;


function problem1() {
    const problemNumber = 1;
    let inputs = [
        [1.2, 100, 10, 0.11], //rho v s cl
        [1.22, 10, 5, 0.2],
        [1.4, 1000, 100, 0.3]
    ]

    let outputs = inputs.map(input => 0.5 * input[0] * input[1] ** 2 * input[2] * input[3]);

    for (let i = 1; i <= inputs.length; i++) {
        document.getElementById(`problem${problemNumber}-test-input-${i}`).innerText = `rho= ${inputs[i - 1][0]}, v= ${inputs[i - 1][1]}, s= ${inputs[i - 1][2]}, cl= ${inputs[i - 1][3]}`;
        const userAnswer = calculateLift(inputs[i - 1][0], inputs[i - 1][1], inputs[i - 1][2], inputs[i - 1][3]);
        document.getElementById(`problem${problemNumber}-test-output-${i}`).innerText = userAnswer;
        document.getElementById(`problem${problemNumber}-test-outcome-${i}`).innerText = outputs[i - 1] === userAnswer ? "✅" : `❌ Expected: ${outputs[i - 1]}`;
    }
}

function problem2() {
    const problemNumber = 2;
    let inputs = [
        [1.2, 100, 10, 0.05], //rho v s cd
        [1.22, 10, 5, 0.06],
        [1.4, 1000, 100, 0.04]
    ]

    let outputs = inputs.map(input => 0.5 * input[0] * input[1] ** 2 * input[2] * input[3]);

    for (let i = 1; i <= inputs.length; i++) {
        document.getElementById(`problem${problemNumber}-test-input-${i}`).innerText = `rho= ${inputs[i - 1][0]}, v= ${inputs[i - 1][1]}, s= ${inputs[i - 1][2]}, cl= ${inputs[i - 1][3]}`;
        const userAnswer = calculateDrag(inputs[i - 1][0], inputs[i - 1][1], inputs[i - 1][2], inputs[i - 1][3]);
        document.getElementById(`problem${problemNumber}-test-output-${i}`).innerText = userAnswer;
        document.getElementById(`problem${problemNumber}-test-outcome-${i}`).innerText = outputs[i - 1] === userAnswer ? "✅" : `❌ Expected: ${outputs[i - 1]}`;
    }
}

function problem3() {
    const problemNumber = 3;
    let inputs = [
        [100000, 9.81, 40, 0.4, 1.22], //m, g, s, cl, rho
        [30000, 9.81, 30, 0.4, 1.23],
        [1000000, 9.81, 100, 0.4, 1.24]
    ]

    let outputs = inputs.map(input => Math.sqrt(2 * input[0] * input[1] / (input[4] * input[2] * input[3])));

    for (let i = 1; i <= inputs.length; i++) {
        document.getElementById(`problem${problemNumber}-test-input-${i}`).innerText = `m= ${inputs[i - 1][0]}, g= ${inputs[i - 1][1]}, s= ${inputs[i - 1][2]}, cl= ${inputs[i - 1][3]}, rho= ${inputs[i - 1][4]}`;
        const userAnswer = calculateStallSpeed(inputs[i - 1][0], inputs[i - 1][1], inputs[i - 1][2], inputs[i - 1][3], inputs[i - 1][4]);
        document.getElementById(`problem${problemNumber}-test-output-${i}`).innerText = userAnswer;
        document.getElementById(`problem${problemNumber}-test-outcome-${i}`).innerText = outputs[i - 1] === userAnswer ? "✅" : `❌ Expected: ${outputs[i - 1]}`;
    }
}


function main() {
    problem1();
    problem2();
    problem3();
}







//add event listener to problem1-test-btn to refresh page
for (let i = 1; i <= numberOfProblems; i++) {
    document.getElementById(`problem${i}-test-btn`).addEventListener("click", () => {
        location.reload();
    })
}

//on page load run main
window.onload = main;