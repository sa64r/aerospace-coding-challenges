const numberOfProblems = 3;


function renderTable(inputs, outputs, problemNumber, userFunction) {
    for (let i = 1; i <= inputs.length; i++) {
        document.getElementById(`problem${problemNumber}-test-input-${i}`).innerText = `(${inputs[i - 1]})`;
        const userAnswer = userFunction(...inputs[i - 1]);
        // document.getElementById(`problem${problemNumber}-test-output-${i}`).innerText = userAnswer;
        document.getElementById(`problem${problemNumber}-test-outcome-${i}`).innerText = outputs[i - 1] === userAnswer ? "✅" : `❌ Expected: ${outputs[i - 1]} but got: ${userAnswer}`;
    }

}

function problem1() {
    const problemNumber = 1;
    let inputs = [
        [1.2, 100, 10, 0.11], //rho v s cl
        [1.22, 10, 5, 0.2],
        [1.4, 1000, 100, 0.3]
    ]

    let outputs = inputs.map(input => 0.5 * input[0] * input[1] ** 2 * input[2] * input[3]);

    renderTable(inputs, outputs, problemNumber, calculateLift);
}

function problem2() {
    const problemNumber = 2;
    let inputs = [
        [1.2, 100, 10, 0.05], //rho v s cd
        [1.22, 10, 5, 0.06],
        [1.4, 1000, 100, 0.04]
    ]

    let outputs = inputs.map(input => 0.5 * input[0] * input[1] ** 2 * input[2] * input[3]);

    renderTable(inputs, outputs, problemNumber, calculateDrag);

}

function problem3() {
    const problemNumber = 3;
    let inputs = [
        [100000, 9.81, 40, 0.4, 1.22], //m, g, s, cl, rho
        [30000, 9.81, 30, 0.4, 1.23],
        [1000000, 9.81, 100, 0.4, 1.24]
    ]

    let outputs = inputs.map(input => Math.sqrt(2 * input[0] * input[1] / (input[4] * input[2] * input[3])));

    renderTable(inputs, outputs, problemNumber, calculateStallSpeed);
}

function problem4() {
    const problemNumber = 4;
    let inputs = [
        [5 * 10 ** 5],
        [3 * 10 ** 6],
        [0]
    ]

    let outputs = inputs.map(input => {
        if (input > 0 && input <= 5 * 10 ** 5) {
            return "Laminar";
        } else if (input > 5 * 10 ** 5 && input < 1 * 10 ** 7) {
            return "Turbulent";
        } else return undefined
    });

    renderTable(inputs, outputs, problemNumber, determineFlowType);
}

function problem5() {
    const problemNumber = 5;
    let inputs = [
        [300, 325, 133.5, 136.5, 310],
        [1450, 1500, 196.7, 198.3, 1499],
        [100, 110, 99.6, 102.3, 105]
    ]

    let outputs = inputs.map(input => ((input[3] - input[2]) / (input[1] - input[0])) * (input[4] - input[0]) + input[2]);

    renderTable(inputs, outputs, problemNumber, obtainTemperature);
}

function problem6() {
    const problemNumber = 6;
    let inputs = [
        [300, 325, 133.5, 136.5, 310],
        [1450, 1500, 196.7, 198.3, 1499],
        [100, 110, 99.6, 102.3, 105]
    ]

    let outputs = inputs.map(input => ((input[3] - input[2]) / (input[1] - input[0])) * (input[4] - input[0]) + input[2]);

    renderTable(inputs, outputs, problemNumber, obtainTemperature);
}


function main() {
    problem1();
    problem2();
    problem3();
    problem4()
    problem5()
}







//add event listener to problem1-test-btn to refresh page
for (let i = 1; i <= numberOfProblems; i++) {
    document.getElementById(`problem${i}-test-btn`).addEventListener("click", () => {
        location.reload();
    })
}

//on page load run main
window.onload = main;