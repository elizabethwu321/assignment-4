    var buttonOne = document.getElementById("buttonOne");
    var illustrationOne = document.getElementById("illustrationOne");

    buttonOne.addEventListener("mouseover", function(){
      illustrationOne.style.opacity = 0;
    });

    buttonOne.addEventListener("mouseout", function(){
      illustrationOne.style.opacity = 1;
    });