const btn1 = document.querySelector("#btn1");
console.log(btn1);
const moodengDrawer = document.querySelector("#moodeng-drawer");
console.log(moodengDrawer);
let isOpen = false;
btn1.addEventListener("click", openADrawer);

function openADrawer() {
    console.log("i am clicked");
    if (!isOpen) {
      moodengDrawer.style.translate = "590px";
      isOpen = true;
      btn1.style.scale = "1.2";

      moleDrawer.style.translate = "-600px";
      isOpen2 = false;
      btn3.style.scale = "1";

      huahuaDrawer.style.translate = "-600px";
      isOpen3 = false;
      btn5.style.scale = "1";
    } else {
      moodengDrawer.style.translate = "-600px";
      isOpen = false;
      btn1.style.scale = "1";
    }
  }

const btn3 = document.querySelector("#btn3");
console.log(btn3);
const moleDrawer = document.querySelector("#mole-drawer");
console.log(moleDrawer);
let isOpen2 = false;
btn3.addEventListener("click", openBDrawer);

function openBDrawer() {
    console.log("i am clicked");
    if (!isOpen2) {
      moleDrawer.style.translate = "590px";
      isOpen2 = true;
      btn3.style.scale = "1.2";

      moodengDrawer.style.translate = "-600px";
      isOpen = false;
      btn1.style.scale = "1";

      huahuaDrawer.style.translate = "-600px";
      isOpen3 = false;
      btn5.style.scale = "1";
    } else {
      moleDrawer.style.translate = "-600px";
      isOpen2 = false;
      btn3.style.scale = "1";
    }
  }

const btn5 = document.querySelector("#btn5");
console.log(btn5);
const huahuaDrawer = document.querySelector("#huahua-drawer");
console.log(huahuaDrawer);
let isOpen3 = false;
btn5.addEventListener("click", openCDrawer);

function openCDrawer() {
    console.log("i am clicked");
    if (!isOpen3) {
      huahuaDrawer.style.translate = "590px";
      isOpen3 = true;
      btn5.style.scale = "1.2";
      
      moodengDrawer.style.translate = "-600px";
      isOpen = false;
      btn1.style.scale = "1";

      moleDrawer.style.translate = "-600px";
      isOpen2 = false;
      btn3.style.scale = "1";
    } else {
      huahuaDrawer.style.translate = "-600px";
      isOpen3 = false;
      btn5.style.scale = "1";
    }
  }