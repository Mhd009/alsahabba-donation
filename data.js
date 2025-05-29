

var values = [
  //Paypal
  46240,
  //Paypal 2
  86,


  //غير مقبوض
  500,//الانسة نور
  
 
//الحملة السابقة
105528,
];

document.addEventListener("DOMContentLoaded", function () {
  // Function to calculate sum
  function calculateSum(arr) {
    var sum = arr.reduce(function (acc, val) {
      return acc + val;
    }, 0);
    return sum;
  }



  // Get sum of values
  var sum = calculateSum(values);
  var sumfirstGoal_bar = calculateSum(values);
  sumfirstGoal_bar = sumfirstGoal_bar - 150000; //- 50000; // في حال اكمال الهدف الاول هون انقص منها الاهداف تباعا // ACHTEN HIER

  // Display the sum in the HTML
  document.getElementById("spend_now").innerHTML = `<p style="text-align: left; padding-left: 15px; color:white; font-weight: bold;">${sum.toLocaleString('de-DE')}</p>`;
  document.getElementById("firstGoal").innerHTML = `<p style="text-align: left; padding-left: 15px; color:white; font-weight: bold;">${sumfirstGoal_bar.toLocaleString('de-DE')}</p>`;

  function move() {
    var elem = document.getElementById("myBar");
    var maxAmount = 500000; // Maximum value
    var percentage = (sum / maxAmount) * 100;
    var number = Math.round(percentage * 100) / 100

    var elem2 = document.getElementById("firstGoal_bar");
    var maxAmountfirstGoal_bar = 100000; // Maximum value
    var percentagefirstGoal_bar = (sumfirstGoal_bar / maxAmountfirstGoal_bar) * 100;
    var numberfirstGoal_bar = Math.round(percentagefirstGoal_bar * 100) / 100

    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width > number) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = number + "%";
        elem.innerHTML = number + "%";
        elem2.style.width = numberfirstGoal_bar + "%";
        elem2.innerHTML = numberfirstGoal_bar + "%";
      }
    }
  }

  // Start the progress
  move();


});
