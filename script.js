function showAlert() {
  alert('You clicked the button!');
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function greetUser() {
  const nameInput = document.getElementById('nameInput').value;
  if (nameInput) {
    alert(`Hello, ${nameInput}!`);
  } else {
    alert('Please enter your name.');
  }
}