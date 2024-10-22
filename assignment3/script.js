// To be honest the code below may not be the most efficient way to execute my intended actions for the drawers, however with a lot of trial and error this was the best I could think of with my current knowledge of scripting.

const btn1 = document.querySelector("#btn1");
console.log(btn1);
const moodengDrawer = document.querySelector("#moodeng-drawer");
console.log(moodengDrawer);

const btn2 = document.querySelector("#btn2");
console.log(btn2);
const pestoDrawer = document.querySelector("#pesto-drawer");
console.log(pestoDrawer);

const btn3 = document.querySelector("#btn3");
console.log(btn3);
const moleDrawer = document.querySelector("#mole-drawer");
console.log(moleDrawer);

const btn4 = document.querySelector("#btn4");
console.log(btn4);
const biscuitsDrawer = document.querySelector("#biscuits-drawer");
console.log(biscuitsDrawer);

const btn5 = document.querySelector("#btn5");
console.log(btn5);
const huahuaDrawer = document.querySelector("#huahua-drawer");

const btn6 = document.querySelector("#btn6");
console.log(btn6);
const jabulaniDrawer = document.querySelector("#jabulani-drawer");
console.log(jabulaniDrawer);

let isOpen = false;
let isOpen2 = false;
let isOpen3 = false;
let isOpen4 = false;
let isOpen5 = false;
let isOpen6 = false;

btn1.addEventListener("click", openADrawer);
btn2.addEventListener("click", openBDrawer);
btn3.addEventListener("click", openCDrawer);
btn4.addEventListener("click", openDDrawer);
btn5.addEventListener("click", openEDrawer);
btn6.addEventListener("click", openFDrawer);

// in the 'if (!isOpen#)' brackets, there are inputs from each drawers as this prevents more than one drawer to be opened for a cleaner UI/UX. It also allows the user to focus on one information slide at a time to not only fully take in the information given to them by one drawer, but to also not overwhelm the screen with information. Furthermore, opening one drawer at a time engages the user to want to look at the other animals for longer interactivity

function openADrawer() {
    console.log("i am clicked");
    if (!isOpen) {
      moodengDrawer.style.translate = "610px";
      isOpen = true;

      pestoDrawer.style.translate = "600px";
      isOpen2 = false;

      moleDrawer.style.translate = "-600px";
      isOpen3 = false;
    
      biscuitsDrawer.style.translate = "600px";
      isOpen4 = false;

      huahuaDrawer.style.translate = "-600px";
      isOpen5 = false;

      jabulaniDrawer.style.translate = "600px";
      isOpen6 = false;
    } else {
      moodengDrawer.style.translate = "-600px";
      isOpen = false;
    }
  }

function openBDrawer() {
    console.log("i am clicked");
    if (!isOpen2) {
      pestoDrawer.style.translate = "-610px";
      isOpen2 = true;

      moodengDrawer.style.translate = "-600px";
      isOpen = false;

      moleDrawer.style.translate = "-600px";
      isOpen3 = false;

      biscuitsDrawer.style.translate = "600px";
      isOpen4 = false;

      huahuaDrawer.style.translate = "-600px";
      isOpen5 = false;

      jabulaniDrawer.style.translate = "600px";
      isOpen6 = false;
    } else {
      pestoDrawer.style.translate = "600px";
      isOpen2 = false;
    }
  }

function openCDrawer() {
    console.log("i am clicked");
    if (!isOpen3) {
      moleDrawer.style.translate = "610px";
      isOpen3 = true;
      
      moodengDrawer.style.translate = "-600px";
      isOpen = false;

      pestoDrawer.style.translate = "600px";
      isOpen2 = false;

      biscuitsDrawer.style.translate = "600px";
      isOpen4 = false;

      huahuaDrawer.style.translate = "-600px";
      isOpen5 = false;

      jabulaniDrawer.style.translate = "600px";
      isOpen6 = false;
    } else {
      moleDrawer.style.translate = "-600px";
      isOpen3 = false;
    }
}

function openDDrawer() {
    console.log("i am clicked");
    if (!isOpen4) {
      biscuitsDrawer.style.translate = "-610px";
      isOpen4 = true;

      moodengDrawer.style.translate = "-600px";
      isOpen = false;

      pestoDrawer.style.translate = "600px";
      isOpen2 = false;

      moleDrawer.style.translate = "-600px";
      isOpen3 = false;

      huahuaDrawer.style.translate = "-600px";
      isOpen5 = false;

      jabulaniDrawer.style.translate = "600px";
      isOpen6 = false;
    } else {
      biscuitsDrawer.style.translate = "600px";
      isOpen4 = false;
    }
  }

  function openEDrawer() {
    console.log("i am clicked");
    if (!isOpen5) {
      huahuaDrawer.style.translate = "610px";
      isOpen5 = true;

      moodengDrawer.style.translate = "-600px";
      isOpen = false;

      pestoDrawer.style.translate = "600px";
      isOpen2 = false;

      moleDrawer.style.translate = "-600px";
      isOpen3 = false;

      biscuitsDrawer.style.translate = "600px";
      isOpen4 = false;

      jabulaniDrawer.style.translate = "600px";
      isOpen6 = false;
    } else {
      huahuaDrawer.style.translate = "-600px";
      isOpen5 = false;
    }
}

function openFDrawer() {
    console.log("i am clicked");
    if (!isOpen6) {
      jabulaniDrawer.style.translate = "-610px";
      isOpen6 = true;

      moodengDrawer.style.translate = "-600px";
      isOpen = false;

      pestoDrawer.style.translate = "600px";
      isOpen2 = false;

      moleDrawer.style.translate = "-600px";
      isOpen3 = false;

      biscuitsDrawer.style.translate = "600px";
      isOpen4 = false;

      huahuaDrawer.style.translate = "-600px";
      isOpen5 = false;
    } else {
      jabulaniDrawer.style.translate = "600px";
      isOpen6 = false;
    }
  }
