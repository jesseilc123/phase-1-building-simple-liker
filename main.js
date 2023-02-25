// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  mimicServerCall()
  .then(data => fakeCallback(data))
  .catch(error =>handleError(error))
})

function fakeCallback(data){
  const pageHearts = document.querySelectorAll(".like-glyph");
 
  pageHearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("activated-heart")
      if(heart.classList == "like-glyph activated-heart"){
        return heart.innerText = FULL_HEART
      }
      if(heart.classList != "like-glyph activated-heart"){
        return heart.innerText = EMPTY_HEART
      }
    })
  }) 
}

function handleError(error){
  alert("Something went wrong!")
  console.log(error.message)
  let hidden = document.getElementById("modal")
  console.log(hidden.className)
  hidden.classList.remove("hidden")
  setTimeout(() => {
    hidden.classList.add("hidden")
  }, 3000)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
