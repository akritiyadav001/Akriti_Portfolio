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


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxXVsabgUYXvc7ZMY_B556G5TIN_gXjWvW-NXectlr67s9fuv76HogcRrSN7nJrhLXS/exec'
  const form = document.forms['submit-to-google-sheet']

  const submitmsg = document.getElementById('confirm-submit')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {submitmsg.innerHTML ="Messeage sent successfully"
        setTimeout(function(){
            submitmsg.innerHTML = "";
        },5000)
        form.reset();
    })
      .catch(error => console.error('Error!', error.message))
  })
