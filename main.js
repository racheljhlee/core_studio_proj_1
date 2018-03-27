$( document ).ready(function() {

    var counter = 0;

    $("#circle-5, #circle-6, #med-circle, #med-circle-2").click(function(){
      $(this).addClass("active-circle");
      counter++;
      console.log("The counter is at: " + counter);
      if(counter > 3) {
        window.open("two.html");
      }
    });

    $("#redact-2, #redact-1, #redact-3, #redact-4").click(function(){
      $(this).addClass("active-redact");
      counter++;
      console.log("The counter is at: " + counter);
      if(counter > 3) {
        window.open("three.html");
      }
    });

    // CODE FOR FOUR.HTML

    $('.submit-button').click(function(){
      var formOne = $("#text-1").val();
      var formTwo = $("#text-2").val();
      var formThree = $("#text-3").val();
      var formFour = $("#text-4").val();
      var formFive = $("#text-5").val();
      var formSix = $("#text-6").val();
      var formSeven = $("#text-7").val();
      var formEight = $("#text-8").val();

      console.log("User wrote: " + formOne);
      if(formOne == "ambitions" && formTwo == "beginner" && formThree == "creative" && formFour == "disappoints" && formFive == "fight" && formSix == "gap" && formSeven == "phase" && formEight == "work") {
        window.open("five.html");
      } 

      else {
        window.open("four-incorrect.html");
      }
      
    });

    // END FOR FOUR.HTML CODE
});

$(function() {
    $( "#draggable, #draggable-2, #draggable-3, #draggable-4, #draggable-5, #draggable-6, #draggable-7, #draggable-8, #draggable-9, #draggable-10, #draggable-11, #draggable-12, #draggable-13, #draggable-14, #draggable-15, #draggable-16, #draggable-17, #draggable-18, #draggable-19").draggable();
});

