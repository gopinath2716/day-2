function copy() {
    document.getElementById("cut").innerHTML = "You copied text!"
  }
  
  function focus(x) {
    x.style.background = "yellow";
  }

  function input() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = "You wrote: " + x;
  }

  function myFunction() {
    alert("You pressed a key inside the input field");
  }

  function onbeforeprint() {
    alert("You are about to print this document!");
  }