$(document).ready(function () {
  $("#inputs").submit(function (e) {
    e.preventDefault();
    // $(".isosceles").show();

    const firstNumber = parseInt($("#A").val());
    const secondNumber = parseInt($("#B").val());
    const thirdNumber = parseInt($("#C").val());



    if (firstNumber === secondNumber && firstNumber === thirdNumber && secondNumber === thirdNumber) {
      $(".Equilateral").fadeToggle(4000);
    }

else if ((firstNumber + secondNumber) <= thirdNumber || (firstNumber + thirdNumber) <= secondNumber || (secondNumber + thirdNumber) <= firstNumber ) {
      $(".nat").show();
    }

    else if (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber) {
      $(".isosceles").fadeToggle();
    }
  
    else if (firstNumber !== secondNumber || firstNumber !== thirdNumber || secondNumber !== thirdNumber) {
      $(".SCALENE").fadeToggle();
    }
    



  });






});