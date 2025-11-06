// Smooth scroll to sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Open popup
function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

// Close popup
document.getElementById('close-popup').onclick = () => {
  document.getElementById('popup').style.display = 'none';
};

// Auto-open popup after 3 seconds
setTimeout(openPopup, 3000);

// Handle form submission
document.getElementById('quote-form').onsubmit = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  localStorage.setItem('userEmail', email);
  window.location.href = 'thankyou.html';
};
