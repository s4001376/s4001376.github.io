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

function openADrawer() {
    console.log("i am clicked");
    if (!isOpen) {
      moodengDrawer.style.translate = "610px";
      isOpen = true;
      // btn1.style.scale = "1.2";

      pestoDrawer.style.translate = "600px";
      isOpen2 = false;
      // btn2.style.scale = "1";

      moleDrawer.style.translate = "-600px";
      isOpen3 = false;
      // btn3.style.scale = "1";
    
      biscuitsDrawer.style.translate = "600px";
      isOpen4 = false;
      // btn4.style.scale = "1";

      huahuaDrawer.style.translate = "-600px";
      isOpen5 = false;
      // btn5.style.scale = "1";

      jabulaniDrawer.style.translate = "600px";
      isOpen6 = false;
      // btn6.style.scale = "1";
    } else {
      moodengDrawer.style.translate = "-600px";
      isOpen = false;
      // btn1.style.scale = "1";
    }
  }

function openBDrawer() {
    console.log("i am clicked");
    if (!isOpen2) {
      pestoDrawer.style.translate = "-610px";
      isOpen2 = true;
      // btn2.style.scale = "1.2";

      moodengDrawer.style.translate = "-600px";
      isOpen = false;
      // btn1.style.scale = "1";

      moleDrawer.style.translate = "-600px";
      isOpen3 = false;
      // btn3.style.scale = "1";

      biscuitsDrawer.style.translate = "600px";
      isOpen4 = false;
      // btn4.style.scale = "1";

      huahuaDrawer.style.translate = "-600px";
      isOpen5 = false;
      // btn5.style.scale = "1";

      jabulaniDrawer.style.translate = "600px";
      isOpen6 = false;
      // btn6.style.scale = "1";
    } else {
      pestoDrawer.style.translate = "600px";
      isOpen2 = false;
      // btn2.style.scale = "1";
    }
  }

function openCDrawer() {
    console.log("i am clicked");
    if (!isOpen3) {
      moleDrawer.style.translate = "610px";
      isOpen3 = true;
      // btn3.style.scale = "1.2";

      moodengDrawer.style.translate = "-600px";
      isOpen = false;
      // btn1.style.scale = "1";

      pestoDrawer.style.translate = "600px";
      isOpen2 = false;
      // btn2.style.scale = "1";

      biscuitsDrawer.style.translate = "600px";
      isOpen4 = false;
      // btn4.style.scale = "1";

      huahuaDrawer.style.translate = "-600px";
      isOpen5 = false;
      // btn5.style.scale = "1";

      jabulaniDrawer.style.translate = "600px";
      isOpen6 = false;
      // btn6.style.scale = "1";
    } else {
      moleDrawer.style.translate = "-600px";
      isOpen3 = false;
      // btn3.style.scale = "1";
    }
}

function openDDrawer() {
    console.log("i am clicked");
    if (!isOpen4) {
      biscuitsDrawer.style.translate = "-610px";
      isOpen4 = true;
      // btn4.style.scale = "1.2";

      moodengDrawer.style.translate = "-600px";
      isOpen = false;
      // btn1.style.scale = "1";

      pestoDrawer.style.translate = "600px";
      isOpen2 = false;
      // btn2.style.scale = "1";

      moleDrawer.style.translate = "-600px";
      isOpen3 = false;
      // btn3.style.scale = "1";

      huahuaDrawer.style.translate = "-600px";
      isOpen5 = false;
      // btn5.style.scale = "1";

      jabulaniDrawer.style.translate = "600px";
      isOpen6 = false;
      // btn6.style.scale = "1";
    } else {
      biscuitsDrawer.style.translate = "600px";
      isOpen4 = false;
      // btn4.style.scale = "1";
    }
  }

  function openEDrawer() {
    console.log("i am clicked");
    if (!isOpen5) {
      huahuaDrawer.style.translate = "610px";
      isOpen5 = true;
      // btn5.style.scale = "1.2";

      moodengDrawer.style.translate = "-600px";
      isOpen = false;
      // btn1.style.scale = "1";

      pestoDrawer.style.translate = "600px";
      isOpen2 = false;
      // btn2.style.scale = "1";

      moleDrawer.style.translate = "-600px";
      isOpen3 = false;
      // btn3.style.scale = "1";

      biscuitsDrawer.style.translate = "600px";
      isOpen4 = false;
      // btn4.style.scale = "1";

      jabulaniDrawer.style.translate = "600px";
      isOpen6 = false;
      // btn6.style.scale = "1";
    } else {
      huahuaDrawer.style.translate = "-600px";
      isOpen5 = false;
      // btn5.style.scale = "1";
    }
}

function openFDrawer() {
    console.log("i am clicked");
    if (!isOpen6) {
      jabulaniDrawer.style.translate = "-610px";
      isOpen6 = true;
      // btn6.style.scale = "1.2";

      moodengDrawer.style.translate = "-600px";
      isOpen = false;
      // btn1.style.scale = "1";

      pestoDrawer.style.translate = "600px";
      isOpen2 = false;
      // btn2.style.scale = "1";

      moleDrawer.style.translate = "-600px";
      isOpen3 = false;
      // btn3.style.scale = "1";

      biscuitsDrawer.style.translate = "600px";
      isOpen4 = false;
      // btn4.style.scale = "1";

      huahuaDrawer.style.translate = "-600px";
      isOpen5 = false;
      // btn5.style.scale = "1";
    } else {
      jabulaniDrawer.style.translate = "600px";
      isOpen6 = false;
      // btn6.style.scale = "1";
    }
  }
