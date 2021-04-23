function mobileNav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function closeNav() {
    if (window.matchMedia('only screen and (max-width: 768px)').matches) {
      var x = document.getElementById("myLinks");
      x.style.display = "none";
 
    } 
  }


// Repair heroes cubes and chevrons
var cubePage1 = document.getElementById("cubePage1");
var cubePage2 = document.getElementById("cubePage2");
var cubePage3 = document.getElementById("cubePage3");

function cube1() {
  var cube1 = document.getElementById("cube1");
  var cube2 = document.getElementById("cube2");
  var cube3 = document.getElementById("cube3");
   cube1.classList.add("activeCube");
   cube2.classList.remove("activeCube");
   cube3.classList.remove("activeCube");

   cubePage1.classList.remove("hidden");
   cubePage2.classList.add("hidden");
   cubePage3.classList.add("hidden");

}

function cube2() {
  var cube1 = document.getElementById("cube1");
  var cube2 = document.getElementById("cube2");
  var cube3 = document.getElementById("cube3");
   cube1.classList.remove("activeCube");
   cube2.classList.add("activeCube");
   cube3.classList.remove("activeCube");

  
   cubePage1.classList.add("hidden");
   cubePage2.classList.remove("hidden");
   cubePage3.classList.add("hidden");

}

function cube3() {
  var cube1 = document.getElementById("cube1");
  var cube2 = document.getElementById("cube2");
  var cube3 = document.getElementById("cube3");
   cube1.classList.remove("activeCube");
   cube2.classList.remove("activeCube");
   cube3.classList.add("activeCube");

   cubePage1.classList.add("hidden");
   cubePage2.classList.add("hidden");
   cubePage3.classList.remove("hidden");
  
}

function chevronLeft(){
  const cube1 = document.getElementById("cube1");
  const cube2 = document.getElementById("cube2");
  const cube3 = document.getElementById("cube3");

  if (document.getElementById("cube1").classList.contains("activeCube")) {
    cube1.classList.remove("activeCube");
    cube2.classList.remove("activeCube");
    cube3.classList.add("activeCube");

    cubePage1.classList.add("hidden");
    cubePage2.classList.add("hidden");
    cubePage3.classList.remove("hidden");
    
  }

  else if (document.getElementById("cube2").classList.contains("activeCube")) {
    cube1.classList.add("activeCube");
    cube2.classList.remove("activeCube");
    cube3.classList.remove("activeCube");

    cubePage1.classList.remove("hidden");
    cubePage2.classList.add("hidden");
    cubePage3.classList.add("hidden");
    
  }

  else if (document.getElementById("cube3").classList.contains("activeCube")) {
    cube1.classList.remove("activeCube");
    cube2.classList.add("activeCube");
    cube3.classList.remove("activeCube");

    cubePage1.classList.add("hidden");
    cubePage2.classList.remove("hidden");
    cubePage3.classList.add("hidden");
    
  }
}
  
function chevronRight(){
  var cube1 = document.getElementById("cube1");
  var cube2 = document.getElementById("cube2");
  var cube3 = document.getElementById("cube3");

  if (document.getElementById("cube1").classList.contains("activeCube")) {
    cube1.classList.remove("activeCube");
    cube2.classList.add("activeCube");
    cube3.classList.remove("activeCube");

  
    cubePage1.classList.add("hidden");
    cubePage2.classList.remove("hidden");
    cubePage3.classList.add("hidden");
  }

  else if (document.getElementById("cube2").classList.contains("activeCube")) {
    cube1.classList.remove("activeCube");
    cube2.classList.remove("activeCube");
    cube3.classList.add("activeCube");

    cubePage1.classList.add("hidden");
    cubePage2.classList.add("hidden");
    cubePage3.classList.remove("hidden");
  }

  else if (document.getElementById("cube3").classList.contains("activeCube")) {
    cube1.classList.add("activeCube");
    cube2.classList.remove("activeCube");
    cube3.classList.remove("activeCube");

    cubePage1.classList.remove("hidden");
    cubePage2.classList.add("hidden");
    cubePage3.classList.add("hidden");
  }
}