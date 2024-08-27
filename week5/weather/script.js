function checkWeather() {
    let temp = document.querySelector("#temp");
    let body = document.querySelector("body");
    let outer = document.querySelector(".outer");
    console.log(temp.value);
    if(temp.value >= 40) {
        body.style.backgroundColor = "red";
        outer.style.backgroundColor = "blue";
        console.log("It's burning hot omg!");
    }
    else if (temp.value < 40 && temp.value >= 30) {
        body.style.backgroundColor = "limegreen";
        outer.style.backgroundColor = "peach";
        console.log("It's nice and warm");
    }
    else if (temp.value < 30 && temp.value >= 15) {
        body.style.backgroundColor = "aqua";
        outer.style.backgroundColor = "purple";
        console.log("It is pleasant weather hehe");
    }
    else {
        body.style.backgroundColor = "grey";
        outer.style.backgroundColor = "coral";
        console.log("Damn that's cold");
    }
}