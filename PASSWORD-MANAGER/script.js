const passwordList = document.getElementById('password-list');
const passwordForm = document.getElementById('password-form');

passwordForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const website = document.getElementById('website').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;


  const listItem = document.createElement('li');
  listItem.textContent = `${website} - ${username}`;
  passwordList.appendChild(listItem);

 
  passwordForm.reset();
});
