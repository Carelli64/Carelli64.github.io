btn = document.getElementById("btn").addEventListener("click", myFunction)
social = document.getElementById("socialLink").addEventListener("click", myFunction2)
social = document.getElementById("socialLink2").addEventListener("click", myFunction2)
social = document.getElementById("socialLink3").addEventListener("click", myFunction2)


function myFunction() {
  alert("Sorry no contact info available at the moment. Try again later")
}

function myFunction2() {
  alert("Sorry the person you are trying to talk to right now cannot reach the phone.")
}