$(document).ready(function() {

    //for animation
    var gradientTitle = $("#PWEnterTitle h1");
    var titleStyle = window.getComputedStyle(gradientTitle[0]);
    var background = titleStyle.background;

    if (background.includes("linear-gradient")) {
      var gradientAngle = background.match(/-?\d+deg/);
      if (gradientAngle){
        var angleValue = parseInt(gradientAngle[0]);
        var increment = 2; 
        var interval = 100; 

        function increaseValue() {
            angleValue += increment;
            var gradientValue = "linear-gradient(" + angleValue + "deg, #36e1ff, #ff0fd6)";

            gradientTitle.css({"background":gradientValue,
            "-webkit-background-clip":"text",
            "background-clip":"text",
            "color":"transparent",
            "width":"fit-content"
            });

        }

        setInterval(increaseValue, interval)
      }
    }

  });