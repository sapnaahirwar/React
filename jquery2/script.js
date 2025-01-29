/* fadeIn and fadeOut and fadeToggle method takes 2 parameters 1st is speed 
and 2nd is callback function that is optioanl */
/* fadeTo takes 3 parameters 1st is speed and
 2nd is opacity and 3rd is callback function */

 $(document).ready(function () {
    $("#btn1").click(function () {
      $(".para").toggle();
    });
    $("#demo").click(function () {
      $(this).hide();
    });
    $("#fadeOut").click(function () {
      $(".div1").fadeOut();
      $(".div2").fadeOut(1000);
      $(".div3").fadeOut(3000);
    });
    $("#fadeIn").click(function () {
      $(".div1").fadeIn();
      $(".div2").fadeIn(1000);
      $(".div3").fadeIn(3000);
    });
    $("#fadeTo").click(function () {
      $(".div1").fadeTo(1000, 0);
      $(".div2").fadeTo(1000, 0.5);
      $(".div3").fadeTo(3000, 0.8);
    });
    $("#fadeToggle").click(function () {
      $(".div1").fadeToggle();
      $(".div2").fadeToggle(1000);
      $(".div3").fadeToggle(3000);
    });
  
    //   $("#demo").mouseover(function () {
    //     alert("mouse enter");
    //   });
    //   $("#demo").mouseleave(function () {
    //     alert("mouse leave");
    //   });
  });
  
  // selectors element, id ,class , this
  // events - click,dblclick,load,mousedown,mouseleave,mouseover
  