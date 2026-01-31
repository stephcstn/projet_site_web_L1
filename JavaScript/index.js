let date1 = new Date();

let dateperso = date1.toLocaleString('fr-FR', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
});

document.getElementById('date').innerHTML = dateperso;

const collectionPages = [
  "Content/Collection/enzo.html",
  "Content/Collection/f40.html",
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const randomLink = document.getElementById("random-link");

randomLink.addEventListener("click", function(event) {
  event.preventDefault();
  const randomPage = getRandomElement(collectionPages);
  randomLink.setAttribute("href", randomPage);
  window.location.href = randomPage;
});