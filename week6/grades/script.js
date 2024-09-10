function checkGrade()
{
    const a1 = document.querySelector("#answer1");
    console.log(a1.value);
    const a2 = document.querySelector("#answer2");
    console.log(a2.value);
    let a1value = parseFloat(a1.value);
    let a2value = parseFloat(a2.value);
    let total = calculateTotal(parseFloat(a1.value), parseFloat(a2.value));
    // let total = parseFloat(a1.value) + parseFloat(a2.value);
    console.log(total);
    giveReport(total);
}

function calculateTotal(a,b)
{
    let sum = a + b;
    return sum;
}

function giveReport(score)
{
    const report = document.querySelector("#report");
    if (score >30) {
        console.log ("You got HD");
        report.textContent = "You got HD";
    }
    else if (score >20 && score <=30)
    {
        console.log("You got D");
        report.textContent = "You got D";
    }
}

// const question2 = document.querySelector("#question2");
// console.log(question2.textContent);
// 
// question2.textContent = "What was your as2 score?";
// 
// const heading = document.querySelector("h1");
// console.log(heading.textContent);
// 
// heading.textContent = "new heading";
// heading.classList.add("red-heading");
// 
const theBee = document.querySelector("#the-bee");
console.log(theBee);
// theBee.classList.add("round");

function toggleMe()
{
    theBee.classList.toggle("round");
}

const header = document.querySelector("header");
console.log(header.innerHTML);
header.innerHTML += `<p class="blue-heading">what's good? </p>
<p class="red-heading"> I like Hearthstone </p>`;

