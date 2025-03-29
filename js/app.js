///Navbar related
let navbar = document.getElementById("Navbar")
let heroeSize = document.getElementById("Heroe").clientHeight

addEventListener("scroll", handleNavbarScroll)
addEventListener("scroll", handleAboutScroll)

function handleNavbarScroll(){

  if (window.scrollY > heroeSize) return
  var percentage = (scrollY/heroeSize)
  navbar.style.opacity = percentage.toString();

}




///Contact form related
var form = document.getElementById("Contact_Form")

form.addEventListener("submit", sendMail)

addEventListener("input", handleInput)

function handleInput(event){

  let inputField = event.target
  let label = inputField.parentElement.getElementsByTagName("Label")[0]

  let className = "hasValue"
  if (inputField.value){
      label.classList.add(className)
  }
  else {
    label.classList.remove(className)
  }
}

function sendMail(event) {

  let email = document.getElementById("Email").value
  let subject = document.getElementById("Subject").value
  let message = document.getElementById("Message").innerHTML


  var link = "mailto:Lichtert.yelle1@icloud.com"
    + email
    + "&subject=" + encodeURIComponent("[ADJUA.BE] " + subject)
    + "&body=" + encodeURIComponent(message)
  ;

  window.location.href = link;
  event.preventDefault()

}


