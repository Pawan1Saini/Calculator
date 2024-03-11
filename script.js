const screen = document.getElementById("Screen");
const spclBtn = document.querySelectorAll(".spcl");
const items = document.querySelectorAll(".items");


function clrInput() {
    screen.value = "";
}
for (let i = 0; i < spclBtn.length; i++) {
  const element = spclBtn[i];
  element.addEventListener("click", function () {
    console.log("element", element);

    if (element.value == "clear") {
      clrInput();
    } else if (element.value == "backspace") {
      let length = screen.value.length;
      screen.value = screen.value.substring(0, length - 1);
    } else {
      var val = screen.value;
      val = val.trim();

      if (val == "") {
        alert(" Please enter value !");
      } else if ( true == isNaN(val)) {
        alert("Please enter digits correctly!");
      }
      
      else if (
        val[0] == "*" ||
        val[0] == "/" ||
        val[0] == "-" ||
        val[0] == "+" ||
        val[0] == "%"
      ) {
        alert(" Please enter digits first !");
      } else {
        val = val.replace(/ /g, "");
        var calculation = eval(val);
        console.log(calculation);
        screen.value = calculation;
       
      }
    }
  });
}

function oninputFunction(e) {
    var itemText = screen.value;
    let regx = /^[0-9]+([*%/\-+]|\.[0-9]+)?$/;
    let result = regx.test(itemText);
    console.log("result of regX", result);
    if(result == false ) {
        clrInput();
        alert("Please enter digits correctly!")
    }
} 


// Click Event On Each Buttons
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    var itemText = this.value;
    screen.value = screen.value + itemText;
  });
}

