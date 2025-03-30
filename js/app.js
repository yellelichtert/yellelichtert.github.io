///Navbar related
let navbar = document.getElementById("Navbar")
let heroe = document.getElementById("Heroe")
let hamburgerButton = document.getElementById("Hamburger_button")
let navbarLinks = document.getElementById("Navbar_Links")

addEventListener("scroll", handleNavbarScroll)
hamburgerButton.addEventListener("click", handleNavbarCollapse)

if (scrollY > heroe){
  navbar.style.opacity = "1";
}


function handleNavbarScroll(){

  if (scrollY > heroe.clientHeight) return
  var percentage = (scrollY/heroe.clientHeight)
  navbar.style.opacity = percentage.toString();

}


function handleNavbarCollapse(){
  navbarLinks.style.display =  navbarLinks.style.display === "none" ? "block" : "none";
}


///About related


///About related

let aboutSection = document.getElementById("About");
let about1 = document.getElementById("About-1")
let about2 = document.getElementById("About-2")

let aboutElements = [about1, about2]

var viewportHeight = document.documentElement.clientHeight
var scrollDisabled = false
var touchStartpos;

addEventListener("scroll", handleAboutScroll)

var opacity = 100;

function handleAboutScroll(){


  var posTop = aboutSection.getBoundingClientRect().top


    if (posTop > viewportHeight/3.5 && posTop < viewportHeight/3) {
      console.log("Disabling scroll")
      document.getElementsByTagName("body")[0].style.overflowY = "hidden"

      scrollDisabled = true

      addEventListener("touchstart", function (e){touchStartpos = e.changedTouches[0].clientY})

      addEventListener("touchmove", function (e) {


        if (posTop > viewportHeight/3.5 && posTop < viewportHeight/3 && scrollDisabled){

          let newPos = e.changedTouches[0].clientY

          if (newPos > touchStartpos){
            opacity += 0.5;
          }
          else if (newPos < touchStartpos){
            opacity-= 0.5
          }

          if (opacity < 0 || opacity > 100){
            document.getElementsByTagName("body")[0].style.overflowY = "scroll"
            scrollDisabled = false
          }

          aboutElements[0].style.opacity = (opacity/100).toString()
          aboutElements[1].style.opacity = ((100-opacity)/100).toString()
          console.log("opacity: " + opacity)


          if (opacity < 0){
            console.log("Setting opacity to 0")
            opacity = 0
          }
          else if (opacity > 100) {
            console.log("Setting opacity to 100")
            opacity = 100
          }

          if (about1.style.opacity === "0"){
            aboutElements = [about2, about1]
          }
          else{
            aboutElements = [about1, about2]
          }

        }
      })

  }

}


function handleScrollAboutUp(){

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


