$(document).ready(function () {
  tryGetCode();
  //for animation of the title
  var gradientTitle = $("#PWEnterTitle h1");
  var titleStyle = window.getComputedStyle(gradientTitle[0]);
  var background = titleStyle.background;

  if (background.includes("linear-gradient")) {
    var gradientAngle = background.match(/-?\d+deg/);
    if (gradientAngle) {
      var angleValue = parseInt(gradientAngle[0]);
      var increment = 2;
      var interval = 100;

      function increaseValue() {
        angleValue += increment;
        var gradientValue = "linear-gradient(" + angleValue + "deg, #36e1ff, #ff0fd6)";

        gradientTitle.css({
          "background": gradientValue,
          "-webkit-background-clip": "text",
          "background-clip": "text",
          "color": "transparent",
          "width": "fit-content"
        });

      }

      setInterval(increaseValue, interval)
    }
  }

  //event after the "Enter" key
  $("#PWEnterBox input").on("keydown", function (event) {
    if (event.key === "Enter") {
      submitCode();
    }
  });

});

function tryGetCode() {

  var fragment = window.location.hash;

  if (fragment) {
    var cleanFragment = fragment.substring(1);

    var params = new URLSearchParams(cleanFragment);

    var pwValue = params.get('pw');

    var encryptedCode = CryptoJS.SHA3(pwValue);

    if (encryptedCode.toString() == "98e2bdf3d45828f1d0d90e31157a613b6d1b27b52955f3d394b612fd1b29c88408bc2bb2cbb8eebd300484a2a791028ebb57fdcca4d7fd2449b4e139078b244e") {

      window.location.href = "homePage.html";
    } else {
      $("#PWEnterBox input").val(pwValue);
      $("#PWEnterBox a img").attr("src", "images/xIcon.png");
      $("#PWEnterBox a").css("background-color", "rgb(240 81 53)");
      setTimeout(function () {
        $("#PWEnterBox a img").attr("src", "images/ArrowRightIcon.png");
        $("#PWEnterBox a").css("background-color", "rgb(235, 235, 235)");
      }, 800);

    }
  }


}

function submitCode() {

  var enteredText = $("#PWEnterBox input").val();
  var encryptedCode = CryptoJS.SHA3(enteredText);

  if (encryptedCode.toString() == "98e2bdf3d45828f1d0d90e31157a613b6d1b27b52955f3d394b612fd1b29c88408bc2bb2cbb8eebd300484a2a791028ebb57fdcca4d7fd2449b4e139078b244e") {
    $("#PWEnterBox a img").attr("src", "images/doneIcon.png");
    $("#PWEnterBox a").css("background-color", "rgb(75 189 103)");
    setTimeout(function () {
      window.location.href = "homePage.html";
    }, 1000);
  } else {
    $("#PWEnterBox a img").attr("src", "images/xIcon.png");
    $("#PWEnterBox a").css("background-color", "rgb(240 81 53)");
    setTimeout(function () {
      $("#PWEnterBox a img").attr("src", "images/ArrowRightIcon.png");
      $("#PWEnterBox a").css("background-color", "rgb(235, 235, 235)");
    }, 800);

  }
  //  $("#PWEnterBox input").val(encryptedCode);
}