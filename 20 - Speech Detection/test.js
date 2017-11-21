const triggers = ['kota', 'psa'];
const string = 'Ala ma kota 5 lat, a psa 10 lat. Kot jest szary';
const words = document.querySelector('.words');

triggers.forEach((item) => {
  const p = document.createElement('p');
  if (string.includes(item)) {
    console.log(`Znalazłem: ${item}`);
    p.innerHTML = string.replace(item, '<span style="color:red">' + item + '</span>');
    words.appendChild(p);
  }
});
