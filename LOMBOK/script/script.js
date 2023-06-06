function myFunction() {
    var x = document.getElementById("mynavbar-part");
    if (x.className === "navbar-part") {
      x.className += " responsive";
    } else {
      x.className = "navbar-part";
    }
  }