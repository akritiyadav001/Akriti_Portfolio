const aboutlinks = document.getElementsByClassName('about-links');
const abouttabcontents = document.getElementsByClassName('about-tab-content');
function openTabContent(tabName)
{
    for(aboutlink of aboutlinks)
    {
        aboutlink.classList.remove("active-link");
    }
    for(abouttab of abouttabcontents)
    {
        abouttab.classList.remove("active-link");
    }
    event.currentTarget.classList.add("active-link");
    
    document.getElementById(tabName).classList.add("active-link");
}



// Google sheet JavaScript

const scriptURL = 'https://script.google.com/macros/s/AKfycbyClxY7AetNtWD7Z-jwwkT2QhvINGrikFXNI2pRLAzaeD-ZclokFFE7QTsvhJztiQJA/exec'
const form = document.forms['submit-to-google-sheet']
const confirm_submit = document.getElementById("confirm-submit")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      confirm_submit.innerHTML = "Message sent Successfully";
      setTimeout(function(){
        confirm_submit.innerHTML = ""
      },5000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
