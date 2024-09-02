const expandButton = document.querySelector('header button')
expandButton.addEventListener('click', expand) 
// verteld de knop dat als erop geklikt word het moet vergroten

function expand () {
  document.body.classList.toggle('expand')
}
