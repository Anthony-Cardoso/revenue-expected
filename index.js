// Import stylesheets
import './style.css';

// Write Javascript code!
const app = document.getElementById('app');
const caAttendu = 10000;
const price = parseFloat(prompt("Entrer votre chiffre d'affaire"));

const showPrice = () => {
  if (price > caAttendu) {
    app.classList.add('green', 'font-ca');
  } else {
    app.classList.add('red', 'font-ca');
  }
  app.innerHTML = price;
};

showPrice();
