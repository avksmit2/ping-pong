//Back-end
var pongs = function(inputNumber) {
  var numList = [getPush(inputNumber)];
  for (i=inputNumber;i>1;i-=1) {
    inputNumber = inputNumber - 1;
    numList.push(getPush(inputNumber));
  };
  return numList;
};
var getPush = function(inputNumber) {
  if (inputNumber % 15 === 0) {
    return "ping-pong";
  } else if (inputNumber % 3 === 0) {
    return "ping";
  } else if (inputNumber % 5 === 0) {
    return "pong";
  } else {
    return inputNumber;
  }
}
var getImage = function(number) {
  if (number === "ping-pong") {
    return "<li>" + number + "<img src='img/paddle5.jpeg'></li>";
  } else if (number === "pong") {
    return "<li>" + number + "<img src='img/paddle6.jpeg'></li>"
  } else if (number === "ping") {
    return "<li>" + number + " <img src='img/paddle3.jpeg'></li>"
  } else {
    return number;
  }
};

//Front-end
$(document).ready(function() {
  $("form").submit(function(event) {
    var inputNumber = Math.ceil($("input#number").val());
    var result = []

    if (isNaN(inputNumber) || inputNumber < 3) {
      alert("please enter a positive integer")
    } else {
      result = pongs(Number(inputNumber));

      result = result.map(function(number, i) {
        return "<li>" + getImage(number) + "</li>";
      });
      $("ul#numberList").html(result.join(""));
      $("video").fadeIn();
    }
    event.preventDefault();
  });
});
