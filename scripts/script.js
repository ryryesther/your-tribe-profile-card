const expandButton = document.querySelector('header button')
expandButton.addEventListener('click', expand) 
// verteld de knop dat als erop geklikt word het moet vergroten

function expand () {
  document.body.classList.toggle('expand')
}

document.addEventListener('click', (e) => {
  createFloatingHeart(e.clientX, e.clientY);
});

function createFloatingHeart(x, y) {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);

  
  setTimeout(() => {
    heart.remove();
  }, 2000); 
}