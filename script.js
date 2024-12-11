function flipCard(card) {
  const cardInner = card.querySelector('.card-inner');
  cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}


// Function to handle click and add temporary glow effect
function addTemporaryGlow(card) {
  // Remove the glow from all cards first
  document.querySelectorAll('.shoe-card').forEach((shoeCard) => {
    shoeCard.classList.remove('glow');
  });

  // Add the glow effect to the clicked card
  card.classList.add('glow');

  // Remove the glow effect after 500 milliseconds
  setTimeout(() => {
    card.classList.remove('glow');
  }, 500); // 500ms = 0.5 seconds
}

// Attach click event listener to all shoe cards
document.querySelectorAll('.shoe-card').forEach((card) => {
  card.addEventListener('click', () => addTemporaryGlow(card));
});

//Menu
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('nav ul');

// Toggle menu visibility
menu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
